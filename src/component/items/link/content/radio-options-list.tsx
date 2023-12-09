import { Box, Button, ButtonGroup, Radio, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface RadioOptionsListProps<T> {
  options: OptionValue<T>[]
  value: T
  onChange: (value: OptionValue<T>) => void
}

export interface OptionValue<T> {
  name: string
  description?: string
  value: T
}

export default function RadioOptionsList<T>({options, value, onChange}: RadioOptionsListProps<T>) {

  const v = options.find(option => option.value == value)
  const [selectedValue, setSelectedValue] = useState<OptionValue<T>>(v as OptionValue<T>)

  function handleChange(value: OptionValue<T>) {
    setSelectedValue(value)
    onChange(value)
  }

  return (
    <ButtonGroup orientation="vertical" fullWidth sx={{'& .MuiButton-root:last-child .MuiBox-root.option-item': {border: 0}}}>
      {options.map(option => (
        <Button key={option.name} onClick={() => handleChange(option)} sx={{px: 0, py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}}}>
          <Stack display={'flex'} alignItems={'center'} direction={'row'} width={'100%'}>
            <Box paddingY={'1rem'}>
              <Radio checked={selectedValue?.value == option.value} />
            </Box>
            <Box className="option-item" paddingY={'1rem'} width={'100%'} borderBottom={'2px solid #eee'}>
              <Typography paddingLeft={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>{option.name}</Typography>
              {option.description && <Typography paddingLeft={'1rem'} color={'#757779'} fontWeight={400} fontSize={'.875rem'} textAlign={'left'} textTransform={'none'}>{option.description}</Typography>}
            </Box>
          </Stack>
        </Button>
      ))}
    </ButtonGroup>
  )
}
