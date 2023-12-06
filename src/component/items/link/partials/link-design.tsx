import { useState } from "react";
import { Button, ButtonGroup, Box, Typography, Drawer, ButtonBase } from "@mui/material";
import BorderRadius, { BorderRadiusValue } from "../content/border-radius";

interface LinkDesignComponentProps {
  
}

export default function LinkDesignComponent({}: LinkDesignComponentProps) {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeProcess, setActiveProcess] = useState<string>()
  const [borderRadiusValue, setBorderRadiusValue] = useState<BorderRadiusValue>('none')

  function handleBorderRadiusClose(value: BorderRadiusValue) {
    setDrawerOpen(false)
    setBorderRadiusValue(value)
  }

  return (
    <div>
      <Box paddingY={'1rem'}>
        <ButtonGroup orientation="vertical" fullWidth>
          <ButtonBase onClick={() => setTimeout(() => setDrawerOpen(true), 300)} sx={{px: '1rem', py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', width: '100%'}}>
            <Typography variant="h4" fontSize={'.875rem'}>Border Radius</Typography>
            <Box>
              <Button sx={{border: 0}}>
                <span>{borderRadiusValue}</span>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path fill="currentColor" fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clipRule="evenodd"/>
                </svg> */}
              </Button>
            </Box>
          </ButtonBase>
        </ButtonGroup>
      </Box>
      <Drawer sx={{'& .MuiPaper-root': {height: '100%', bgcolor: '#f5f7fa'}}}
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
          <BorderRadius value={borderRadiusValue} onClose={handleBorderRadiusClose} />
      </Drawer>
    </div>
  )
}
