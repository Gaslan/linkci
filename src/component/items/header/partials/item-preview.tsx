import { Box } from "@mui/material";
import { Item } from "../header-main";

interface ItemPreviewProps {
  item: Item
}

export default function ItemPreview({item}: ItemPreviewProps) {

  const label = item?.content?.header && item?.content?.header != '' ? item?.content?.header : 'Header'
  const design = item.design

  return (
    <Box py={'1rem'}>
      <Box borderRadius={'1rem'} bgcolor={'#fff'} px={'1.5rem'} py={'1rem'} lineHeight={'24px'}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} color={design.color} fontWeight={design.fontWeight} fontSize={design.fontSize}>
          {label}
        </Box>
      </Box>
    </Box>
  )
}
