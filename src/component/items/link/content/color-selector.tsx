import { Box, IconButton } from "@mui/material"
import { Icon } from '@iconify/react';

const colors = [
  '#000',
  '#c92a2a',
  '#a61e4d',
  '#862e9c',
  '#5f3dc4',
  '#364fc7',
  'rgb(24, 100, 171)',
  'rgb(11, 114, 133)',
  'rgb(8, 127, 91)',
  'rgb(92, 148, 13)',
  'rgb(230, 119, 0)',
  'rgb(217, 72, 15)',
]

interface ColorSelectorProps {
  value: string,
  onChange: (value: string) => void
}

export default function ColorSelector({value, onChange}: ColorSelectorProps) {

  function handleBorderColorChange(color: string) {
    onChange(color)
  }

  return (
    <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} gap={'6px'}>
      {colors.map(color => (
        <IconButton key={color} onClick={() => handleBorderColorChange(color)} sx={{padding: '4px'}}>
          <Box width={'40px'} height={'40px'} bgcolor={color} borderRadius={'20px'} position={'relative'}>
            {value == color && (
              <Box position={'absolute'} top={'8px'} left={'8px'} color={'#fff'}>
                <Icon icon="tabler:check" />
              </Box>
            )}
          </Box>
        </IconButton>
      ))}
    </Box>
  )
}
