import { Box, Divider, Drawer, Slider, Stack, Typography } from "@mui/material";
import { HeaderDesign, Item } from "../header-main";
import ItemPreview from "./item-preview";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Color from "./design/color";

interface ItemDesignProps {
  item: Item
  onDataChange: (value: HeaderDesign) => void
}

type ProcessType = 'color'

export default function ItemDesign({item, onDataChange}: ItemDesignProps) {
  const [design, setDesign] = useState<HeaderDesign>(item.design)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeProcess, setActiveProcess] = useState<ProcessType>()
  const [colorSelectType, setColorSelectType] = useState<keyof HeaderDesign>()
  const [colorSelectValue, setColorSelectValue] = useState<string>()

  function handleFontSizeChange(event: Event, value: number | number[], activeThumb: number) {
    updateDesignState('fontSize', typeof value == 'number' ? value : 0)
  }

  function handleFontWeightChange(event: Event, value: number | number[], activeThumb: number) {
    updateDesignState('fontWeight', typeof value == 'number' ? value : 0)
  }

  function updateDesignState(key: string, value: string | number) {
    setDesign(old => ({...old, [key]: value}))
    onDataChange({...item.design, [key]: value})
  }

  function handleColorSelectButtonClick(type: keyof HeaderDesign, value: string) {
    setDrawerOpen(true)
    setActiveProcess('color')
    setColorSelectType(type)
    setColorSelectValue(value)
  }

  function handleColorSelectClose(value: string, type: keyof HeaderDesign) {
    setDrawerOpen(false)
    setActiveProcess(undefined)
    setColorSelectType(undefined)
    setColorSelectValue(undefined)
    updateDesignState(type, value)
  }

  function handleColorSelectChange(value: string, type: keyof HeaderDesign) {
    updateDesignState(type, value)
  }

  return (
    <Box sx={{height: 'calc(100dvh - 110px)', maxHeight: 'calc(100dvh - 110px)', display: 'flex', flexDirection:'column'}}>
      <ItemPreview item={item} />
      
      <Box sx={{overflow: 'auto', pb: '80px'}}>
        <Box paddingBottom={'1rem'} px={'1.5rem'}>Font</Box>
          <Box bgcolor={'#fff'} borderRadius={'1rem'}>
            <Box onClick={() => handleColorSelectButtonClick("color", item.design.color)} display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingY={'1rem'} px={'1.5rem'} sx={{cursor: 'pointer'}}>
              <Typography color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Color</Typography>
              <Stack direction={'row'} alignItems={'center'} gap={'12px'}>
                <Box width={'32px'} height={'32px'} bgcolor={item.design.color} borderRadius={'16px'}></Box>
                <Icon icon="tabler:chevron-right" />
              </Stack>
            </Box>
            <Box paddingY={'.5rem'} px={'1.5rem'}>
              <Divider />
            </Box>
            <Box paddingY={'1rem'} px={'1.5rem'}>
              <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Size</Typography>
              <Slider
                defaultValue={16}
                valueLabelDisplay="auto"
                step={1}
                marks
                min={12}
                max={24}
                value={item.design.fontSize}
                onChange={handleFontSizeChange}
              />
            </Box>
            <Box paddingY={'.5rem'} px={'1.5rem'}>
              <Divider />
            </Box>
            <Box paddingY={'1rem'} px={'1.5rem'}>
              <Typography paddingBottom={'1rem'} color={'#000'} fontWeight={500} fontSize={'1.125rem'} textAlign={'left'} textTransform={'none'}>Weight</Typography>
              <Slider
                defaultValue={500}
                valueLabelDisplay="auto"
                step={100}
                marks
                min={300}
                max={900}
                value={item.design.fontWeight}
                onChange={handleFontWeightChange}
              />
            </Box>
          </Box>
      </Box>
      

      <Drawer sx={{'& .MuiPaper-root': {height: '100%', bgcolor: '#f5f7fa'}}}
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
          {activeProcess == 'color' && (
            <Color item={item} value={colorSelectValue ?? ''} type={colorSelectType ?? 'color'} onClose={handleColorSelectClose} onChange={handleColorSelectChange} />
          )}
      </Drawer>
    </Box>
  )
}
