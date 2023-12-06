import { useState } from "react";
import { Box, Button, IconButton, Typography, ButtonGroup, Stack, Radio } from "@mui/material";

interface BorderRadiusProps {
  value: BorderRadiusValue
  onClose: (value: BorderRadiusValue) => void
}

export type BorderRadiusValue = 'none' | 'medium' | 'full'

export default function BorderRadius({value, onClose}: BorderRadiusProps) {

  const [selectedValue, setSelectedValue] = useState<BorderRadiusValue>(value)

  function handleButtonClick(value: BorderRadiusValue) {
    setSelectedValue(value)
  }

  return (
    <>
      <Box display={'flex'} alignItems={'center'} padding={'1rem'}>
        <IconButton onClick={() => onClose(selectedValue)} sx={{color: '#000'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"/>
          </svg>
        </IconButton>
        <Typography fontSize={'18px'} fontWeight={'600'} marginLeft={'1rem'}>Border Radius</Typography>
      </Box>
      <Box paddingBottom={'1rem'}>
        <Box borderRadius={'1rem'} bgcolor={'#fff'} px={'1.5rem'} py={'1rem'}>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} bgcolor={'#e1ebfb'} border={'1px solid #c9d7ef'} position={'relative'} width={'100%'} height={'60px'} borderRadius={`${selectedValue == 'full' ? '30px' : selectedValue == 'medium' ? '16px' : '0px'}`}>
            <Box marginLeft={'2rem'} width={'30%'} height={'10px'} borderRadius={'6px'} bgcolor={'#c6d4eb'}></Box>
            <Box marginLeft={'2rem'} width={'80%'} height={'10px'} borderRadius={'6px'} bgcolor={'#c6d4eb'}></Box>
          </Box>
        </Box>
      </Box>
      <Box paddingBottom={'1rem'} px={'1.5rem'}>
        Select border radius value.
      </Box>
      <Box paddingBottom={'1rem'}>
        <ButtonGroup orientation="vertical" fullWidth>
          <Button onClick={() => handleButtonClick('none')} sx={{px: '1rem', py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
            <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
              <Box paddingY={'1rem'}>
                <Radio checked={selectedValue == 'none'} />
              </Box>
              <Box paddingY={'1rem'} width={'100%'} borderBottom={'2px solid #eee'}>
                <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>None</Typography>
                <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>No border radius</Typography>
              </Box>
            </Stack>
          </Button>
          <Button onClick={() => handleButtonClick('medium')} sx={{px: '1rem', py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
            <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
              <Box paddingY={'1rem'}>
                <Radio checked={selectedValue == 'medium'} />
              </Box>
              <Box paddingY={'1rem'} width={'100%'} borderBottom={'2px solid #eee'}>
                <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Medium</Typography>
                <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>Medium size border radius</Typography>
              </Box>
            </Stack>
          </Button>
          <Button onClick={() => handleButtonClick('full')} sx={{px: '1rem', py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
            <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
              <Box paddingY={'1rem'}>
                <Radio checked={selectedValue == 'full'} />
              </Box>
              <Box paddingY={'1rem'} width={'100%'}>
                <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Full</Typography>
                <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>Full border radius</Typography>
              </Box>
            </Stack>
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}
