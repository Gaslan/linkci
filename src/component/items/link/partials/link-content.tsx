import { useState, forwardRef, useImperativeHandle } from "react";
import { Link, LinkContent } from "../link.types";
import { Box, TextField } from "@mui/material";

interface LinkContentProps {
  link: Link
  onDataChange: (value: LinkContent) => void
}

export default function LinkContentComponent({link, onDataChange}: LinkContentProps) {

  // const [title, setTitle] = useState(link.content?.title)
  // const [url, setUrl] = useState(link.content?.url)

  const [linkContent, setLinkContent] = useState(link.content)

  function handleDataChange(type: keyof LinkContent, value: any) {
    setLinkContent(old => ({...old, [type]: value}))
    onDataChange({...link.content, [type]: value})
  }

  return (
    <Box py={'1rem'} className="text-sm">
      <Box bgcolor={'#fff'} borderRadius={'1rem'} mb={'1rem'}>
        <Box paddingY={'1rem'} px={'1.5rem'}>
          <Box mb={'1rem'}>
            <TextField 
              fullWidth 
              label="Title" 
              id="fullWidth"
              type="text"
              value={linkContent.title} 
              onChange={(e) => handleDataChange('title', e.target.value)}
            />
          </Box>
          <Box>
            <TextField 
              fullWidth 
              label="Link URL" 
              id="fullWidth"
              type="url"
              value={linkContent.url} 
              onChange={(e) => handleDataChange('url', e.target.value)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
