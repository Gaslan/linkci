import { useState } from "react";
import { Box, Button, IconButton, Typography, ButtonGroup, Stack, Radio, Slider, Divider } from "@mui/material";
import { BorderRadiusValue } from "./border-radius";

interface BorderProps {
  value: BorderValue
  onClose: (value: BorderValue) => void
}

export interface BorderValue {
  width: number
  color: string
  borderRadius: BorderRadiusValue
}

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

export default function Border({value, onClose}: BorderProps) {

  const [selectedValue, setSelectedValue] = useState<BorderValue>(value)

  function handleBorderWidthChange(event: Event, value: number | number[], activeThumb: number) {
    setSelectedValue(old => ({...old, width: typeof value == 'number' ? value : 0}))
  }

  function handleBorderColorChange(color: string) {
    setSelectedValue(old => ({...old, color: color}))
  }

  function handleBorderRadiusClick(radius: BorderRadiusValue) {
    setSelectedValue(old => ({...old, borderRadius: radius}))
  }

  function parseRadius(value: string) {
    switch (value) {
      case 'none':
        return 0
      case 'medium':
        return 16
      case 'full':
        return 30
      default:
        return 0;
    }
  }

  return (
    <>
      <Box display={'flex'} alignItems={'center'} padding={'1rem'}>
        <IconButton onClick={() => onClose(selectedValue)} sx={{color: '#000'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"/>
          </svg>
        </IconButton>
        <Typography fontSize={'18px'} fontWeight={'600'} marginLeft={'1rem'}>Border</Typography>
      </Box>
      <Box paddingBottom={'1rem'}>
        <Box borderRadius={'1rem'} bgcolor={'#fff'} px={'1.5rem'} py={'1rem'}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} bgcolor={'#e1ebfb'} border={`${selectedValue.width}px solid ${selectedValue.color}`} position={'relative'} width={'100%'} height={'60px'} borderRadius={`${parseRadius(selectedValue.borderRadius)}px`}>
            <Box marginLeft={'2rem'} width={'30%'} height={'10px'} borderRadius={'6px'} bgcolor={'#c6d4eb'}></Box>
            <Box marginLeft={'2rem'} width={'80%'} height={'10px'} borderRadius={'6px'} bgcolor={'#c6d4eb'}></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{overflow: 'auto'}}>
        <Box paddingBottom={'1rem'} px={'1.5rem'}>
          Select border type.
        </Box>
        <Box bgcolor={'#fff'} borderRadius={'1rem'}>
          <Box paddingY={'1rem'} px={'1.5rem'}>
            <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Border Width</Typography>
            <Slider
              aria-label="border width"
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              value={selectedValue.width}
              onChange={handleBorderWidthChange}
            />
          </Box>
          <Divider />
          <Box paddingY={'1rem'} px={'1.5rem'}>
            <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Border Color</Typography>
            <Box display={'flex'} alignItems={'center'} flexWrap={'wrap'} gap={'6px'}>
              {colors.map(color => (
                <IconButton onClick={() => handleBorderColorChange(color)} sx={{padding: '4px'}}>
                  <Box width={'40px'} height={'40px'} bgcolor={color} borderRadius={'20px'} position={'relative'}>
                    {selectedValue.color == color && (
                      <Box position={'absolute'} top={'8px'} left={'8px'} color={'#fff'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 12l4.243 4.243l8.484-8.486"/>
                        </svg>
                      </Box>
                    )}
                  </Box>
                </IconButton>
              ))}
              
            </Box>
          </Box>

          <Divider />

          
          <Box paddingY={'1rem'} px={'1.5rem'}>
            <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Border Radius</Typography>
            <ButtonGroup orientation="vertical" fullWidth>
              <Button onClick={() => handleBorderRadiusClick('none')} sx={{px: 0, py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
                <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
                  <Box paddingY={'1rem'}>
                    <Radio checked={selectedValue.borderRadius == 'none'} />
                  </Box>
                  <Box paddingY={'1rem'} width={'100%'} borderBottom={'2px solid #eee'}>
                    <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>None</Typography>
                    <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>No border radius</Typography>
                  </Box>
                </Stack>
              </Button>
              <Button onClick={() => handleBorderRadiusClick('medium')} sx={{px: 0, py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
                <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
                  <Box paddingY={'1rem'}>
                    <Radio checked={selectedValue.borderRadius == 'medium'} />
                  </Box>
                  <Box paddingY={'1rem'} width={'100%'} borderBottom={'2px solid #eee'}>
                    <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Medium</Typography>
                    <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>Medium size border radius</Typography>
                  </Box>
                </Stack>
              </Button>
              <Button onClick={() => handleBorderRadiusClick('full')} sx={{px: 0, py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
                <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
                  <Box paddingY={'1rem'}>
                    <Radio checked={selectedValue.borderRadius == 'full'} />
                  </Box>
                  <Box paddingY={'1rem'} width={'100%'}>
                    <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Full</Typography>
                    <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>Full border radius</Typography>
                  </Box>
                </Stack>
              </Button>
            </ButtonGroup>
          </Box>

        </Box>
      </Box>
      
    </>
  )
}
