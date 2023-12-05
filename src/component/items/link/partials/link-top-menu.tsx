import { SyntheticEvent, useState } from "react";
import { Tabs, Tab } from "@mui/material";

export type Tabs = 'content' | 'design'

interface LinkTopMenuProps {
  onTabChange: (value: Tabs) => void
}

export default function LinkTopMenu({onTabChange}: LinkTopMenuProps) {

  const [tabValue, setTabValue] = useState<Tabs>('content')

  function handleTabChange(event: SyntheticEvent, value: any) {
    setTabValue(value)
    onTabChange(value)
  }

  return (
    <div className="panel-title w-full overflow-y-auto transition-transform bg-white dark:bg-gray-800 border-b">
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example" sx={{'& .MuiTab-root':  {fontSize: '.75rem'}}}
      >
        <Tab label="Content" value={'content'} />
        <Tab label="Design" value={'design'} />
      </Tabs>
    </div>
  )
}