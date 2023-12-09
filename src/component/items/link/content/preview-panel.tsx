import { Box } from "@mui/material"
import { LinkDesign } from "../link.types"

interface PreviewPanelProps {
  designValue: LinkDesign
}

export default function PreviewPanel({designValue}: PreviewPanelProps) {

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

  return (
    <Box py={'1rem'}>
      <Box borderRadius={'1rem'} bgcolor={'#fff'} px={'1.5rem'} py={'1rem'}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} bgcolor={designValue.backgroundColor} border={`${designValue.borderWidth}px solid ${designValue.borderColor}`} position={'relative'} width={'100%'} height={'60px'} borderRadius={`${parseRadius(designValue.borderRadius)}px`}>
          <Box marginLeft={'2rem'} width={'30%'} height={'10px'} borderRadius={'6px'} bgcolor={designValue.color}></Box>
          <Box marginLeft={'2rem'} width={'80%'} height={'10px'} borderRadius={'6px'} bgcolor={designValue.color}></Box>
        </Box>
      </Box>
    </Box>
  )
}
