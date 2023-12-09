import { useState } from "react";
import { Box, IconButton, Typography, Divider } from "@mui/material";
import ColorSelector from "./color-selector";
import PreviewPanel from "./preview-panel";
import { LinkDesign } from "../link.types";

interface ColorProps {
  design: LinkDesign
  value: string
  type: keyof LinkDesign
  onClose: (value: string, type: keyof LinkDesign) => void
}

export default function Color({design, value, type, onClose}: ColorProps) {

  const [selectedValue, setSelectedValue] = useState<string>(value)

  return (
    <>
      <Box display={'flex'} alignItems={'center'} padding={'1rem'} pb={0}>
        <IconButton onClick={() => onClose(selectedValue, type)} sx={{color: '#000'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"/>
          </svg>
        </IconButton>
        <Typography fontSize={'18px'} fontWeight={'600'} marginLeft={'1rem'}>Color</Typography>
      </Box>

      <PreviewPanel designValue={{...design, [type]: selectedValue}} />

      <Box sx={{overflow: 'auto'}}>
        <Box paddingBottom={'1rem'} px={'1.5rem'}>
          Select border type.
        </Box>

        <Box bgcolor={'#fff'} borderRadius={'1rem'} mb={'1rem'}>
          <Box paddingY={'1rem'} px={'1.5rem'}>
            <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Background Color</Typography>
            <ColorSelector value={selectedValue} onChange={setSelectedValue} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
