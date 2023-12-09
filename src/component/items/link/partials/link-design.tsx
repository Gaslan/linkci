import { forwardRef, useImperativeHandle, useState } from "react";
import { Box, Typography, Drawer, Stack, Divider, Slider } from "@mui/material";
import { BorderRadiusValue } from "../content/border-radius";
import RadioOptionsList from "../content/radio-options-list";
import Color from "../content/color";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, LinkDesign } from "../link.types";

interface LinkDesignProps {
  link: Link
  onDataChange: (value: LinkDesign) => void
}

type ProcessType = 'border' | 'border-radius' | 'color'

const initialValue: LinkDesign = {
  borderColor: '#ddd',
  borderWidth: 1,
  borderRadius: 'medium',
  backgroundColor: '#aaa',
  color: '#567'
}


export default function LinkDesignComponent({link, onDataChange}: LinkDesignProps) {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeProcess, setActiveProcess] = useState<ProcessType>()
  const [design, setDesign] = useState<LinkDesign>(link.design)
  const [colorSelectType, setColorSelectType] = useState<keyof LinkDesign>()
  const [colorSelectValue, setColorSelectValue] = useState<string>()

  function handleBorderWidthChange(event: Event, value: number | number[], activeThumb: number) {
    updateDesignState('borderWidth', typeof value == 'number' ? value : 0)
  }

  function handleBorderRadiusClick(radius: BorderRadiusValue) {
    updateDesignState('borderRadius', radius)
  }

  function updateDesignState(key: string, value: string | number) {
    setDesign(old => ({...old, [key]: value}))
    onDataChange({...link.design, [key]: value})
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

  function handleColorSelectButtonClick(type: keyof LinkDesign, value: string) {
    setDrawerOpen(true)
    setActiveProcess('color')
    setColorSelectType(type)
    setColorSelectValue(value)
  }

  function handleColorSelectClose(value: string, type: keyof LinkDesign) {
    setDrawerOpen(false)
    setActiveProcess(undefined)
    setColorSelectType(undefined)
    setColorSelectValue(undefined)
    updateDesignState(type, value)
  }

  

  return (
    <div style={{height: 'calc(100dvh - 110px)', maxHeight: 'calc(100dvh - 110px)', display: 'flex', flexDirection:'column'}}>
      <Box>
        <Box padding={'1rem 0'}>
          <Box borderRadius={'1rem'} bgcolor={'#fff'} px={'1.5rem'} py={'1rem'}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} bgcolor={design.backgroundColor} border={`${design.borderWidth}px solid ${design.borderColor}`} position={'relative'} width={'100%'} height={'60px'} borderRadius={`${parseRadius(design.borderRadius)}px`}>
              <Box marginLeft={'2rem'} width={'30%'} height={'10px'} borderRadius={'6px'} bgcolor={design.color}></Box>
              <Box marginLeft={'2rem'} width={'80%'} height={'10px'} borderRadius={'6px'} bgcolor={design.color}></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{overflow: 'auto', pb: '80px'}}>
        <Box paddingBottom={'1rem'} px={'1.5rem'}>Text</Box>

        <Box bgcolor={'#fff'} borderRadius={'1rem'} mb={'1rem'} py={'.5rem'}>
          <Box onClick={() => handleColorSelectButtonClick("backgroundColor", design.backgroundColor)} display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingY={'1rem'} px={'1.5rem'} sx={{cursor: 'pointer'}}>
            <Typography color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Background Color</Typography>
            <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
              <Box width={'32px'} height={'32px'} bgcolor={design.backgroundColor} borderRadius={'16px'}></Box>
              <Icon icon="tabler:chevron-right" />
            </Stack>
          </Box>
          <Box paddingY={'.5rem'} px={'1.5rem'}>
            <Divider />
          </Box>
          <Box onClick={() => handleColorSelectButtonClick("color", design.color)} display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingY={'1rem'} px={'1.5rem'} sx={{cursor: 'pointer'}}>
            <Typography color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Text Color</Typography>
            <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
              <Box width={'32px'} height={'32px'} bgcolor={design.color} borderRadius={'16px'}></Box>
              <Icon icon="tabler:chevron-right" />
            </Stack>
          </Box>
        </Box>

        <Box paddingBottom={'1rem'} px={'1.5rem'}>Border</Box>
        <Box bgcolor={'#fff'} borderRadius={'1rem'}>
          <Box paddingY={'1rem'} px={'1.5rem'}>
            <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Border Width</Typography>
            <Slider
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              value={design.borderWidth}
              onChange={handleBorderWidthChange}
            />
          </Box>

          <Box paddingY={'.5rem'} px={'1.5rem'}>
            <Divider />
          </Box>

          <Box onClick={() => handleColorSelectButtonClick("borderColor", design.borderColor)} display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingY={'1rem'} px={'1.5rem'} sx={{cursor: 'pointer'}}>
            <Typography color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Border Color</Typography>
            <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
              <Box width={'32px'} height={'32px'} bgcolor={design.borderColor} borderRadius={'16px'}></Box>
              <Icon icon="tabler:chevron-right" />
            </Stack>
          </Box>

          <Box paddingY={'.5rem'} px={'1.5rem'}>
            <Divider />
          </Box>

          
          <Box paddingY={'1rem'} px={'1.5rem'}>
            <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Border Radius</Typography>
            <RadioOptionsList 
              options={[
                {
                  name: "None",
                  description: 'No border radius',
                  value: 'none'
                },
                {
                  name: "Medium",
                  description: 'Medium size border radius',
                  value: 'medium'
                },
                {
                  name: "Full",
                  description: 'Full border radius',
                  value: 'full'
                }
              ]} 
              value={link.design.borderRadius}
              onChange={(value) => {handleBorderRadiusClick(value.value as BorderRadiusValue)}} />
          </Box>
        </Box>
      </Box>

      <Drawer sx={{'& .MuiPaper-root': {height: '100%', bgcolor: '#f5f7fa'}}}
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
          {activeProcess == 'color' && (
            <Color design={design} value={colorSelectValue ?? ''} type={colorSelectType ?? 'color'} onClose={handleColorSelectClose} />
          )}
      </Drawer>
    </div>
  )
}
