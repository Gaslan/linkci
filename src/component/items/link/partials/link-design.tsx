import { useState } from "react";
import { Button, ButtonGroup, Box, Typography, Drawer, Stack } from "@mui/material";
import BorderRadius, { BorderRadiusValue } from "../content/border-radius";
import Border, { BorderValue } from "../content/border";

interface LinkDesignComponentProps {
  
}

type ProcessType = 'border' | 'border-radius'

export default function LinkDesignComponent({}: LinkDesignComponentProps) {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeProcess, setActiveProcess] = useState<ProcessType>()
  const [borderRadiusValue, setBorderRadiusValue] = useState<BorderRadiusValue>('none')
  const [borderValue, setBorderValue] = useState<BorderValue>({width: 1, color: '#222', borderRadius: 'none'})

  function handleBorderRadiusOpen() {
    setDrawerOpen(true)
    setActiveProcess('border-radius')
  }

  function handleBorderOpen() {
    setDrawerOpen(true)
    setActiveProcess('border')
  }

  function handleBorderRadiusClose(value: BorderRadiusValue) {
    setDrawerOpen(false)
    setBorderRadiusValue(value)
    setActiveProcess(undefined)
  }

  function handleBorderClose(value: BorderValue) {
    setDrawerOpen(false)
    setBorderValue(value)
    setActiveProcess(undefined)
  }

  return (
    <div>
      <Box paddingY={'1rem'}>
        <ButtonGroup orientation="vertical" fullWidth>
          <Button onClick={() => setTimeout(handleBorderRadiusOpen, 300)} sx={{px: '1rem', py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', width: '100%'}}>
            <Typography variant="h4" fontSize={'.875rem'}>Border Radius</Typography>
            <Box>
              <span>{borderRadiusValue}</span>
            </Box>
          </Button>
          <Button onClick={() => setTimeout(handleBorderOpen, 300)} sx={{px: '1rem', py: 0, borderRadius: '1rem', border: 0, bgcolor: '#fff!important', '&:hover': {border: 0}, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', width: '100%'}}>
            <Typography variant="h4" fontSize={'.875rem'}>Border</Typography>
            <Box>
              <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
                <span>{borderValue.width}px</span>
                <Box width={'32px'} height={'32px'} bgcolor={borderValue.color} borderRadius={'16px'}></Box>
              </Stack>
            </Box>
          </Button>
        </ButtonGroup>
      </Box>
      <Drawer sx={{'& .MuiPaper-root': {height: '100%', bgcolor: '#f5f7fa'}}}
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
          {activeProcess == 'border-radius' && (
            <BorderRadius value={borderRadiusValue} onClose={handleBorderRadiusClose} />
          )}
          {activeProcess == 'border' && (
            <Border value={borderValue} onClose={handleBorderClose} />
          )}
      </Drawer>
    </div>
  )
}
