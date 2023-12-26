import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { HeaderContent, Item } from "../header-main";

interface ItemContentProps {
  item: Item
  onDataChange: (value: HeaderContent) => void
}

export default function ItemContent({item, onDataChange}: ItemContentProps) {
  
  const [content, setContent] = useState(item.content)

  function handleDataChange(type: keyof HeaderContent, value: any) {
    setContent(old => ({...old, [type]: value}))
    onDataChange({...item.content, [type]: value})
  }

  return (
    <Box py={'1rem'} className="text-sm">
      <Box bgcolor={'#fff'} borderRadius={'1rem'} mb={'1rem'}>
        <Box paddingY={'1rem'} px={'1.5rem'}>
          <Box mb={'1rem'}>
            <TextField
              fullWidth 
              label="Header" 
              id="header"
              type="text"
              value={content.header} 
              onChange={(e) => handleDataChange('header', e.target.value)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
