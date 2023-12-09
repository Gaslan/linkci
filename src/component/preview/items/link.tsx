import { Item, Link } from "@/component/items/link/link.types";
import { Box } from "@mui/material";

interface LinkProps {
  item: Item
}

export default function Link({item}: LinkProps) {

  const link = item as Link

  return (
    <Box mb={'1rem'}>
      <Box 
        className="rounded-md p-4" 
        bgcolor={`${link.design?.backgroundColor ?? '#fff'}`}
        border={`${link.design?.borderWidth ?? '0'}px solid`}
        borderColor={`${link.design?.borderColor ?? '#fff'}`}
        borderRadius={`${link.design?.borderRadius ?? '0'}px`}
        style={{boxShadow: 'rgba(10, 11, 13, 0.08) 0px 2px 4px 0px'}}
      >
        <Box
          className="item-title" 
          color={`${link.design?.color ?? '#000'}`}
          style={{fontSize: '.875rem', fontWeight: 600}}
        >
          {link.content.title}
        </Box>
        <Box 
          className="item-url" 
          color={`${link.design?.color ?? '#000'}`}
          style={{fontSize: '.875rem', fontWeight: 400}}
        >
          {link.content.url}
        </Box>
      </Box>
    </Box>
  )
}
