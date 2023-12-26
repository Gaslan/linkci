import { useState } from "react";
import ItemTitle from "./partials/item-title";
import ItemTopMenu from "./partials/item-top-menu";
import LinkTopMenu, { Tabs } from "./partials/item-top-menu";
import ItemContentComponent from "./partials/item-content";
import ItemDesignComponent from "./partials/item-design";

const initialHeaderValue: Item = {
  content: {
    header: ''
  },
  design: {

  }
}

export interface Item {
  content: HeaderContent
  design: HeaderDesign
}

export interface HeaderContent {
  header: string
}

export interface HeaderDesign {

}

interface HeaderMainProps {
  onClose: () => void
}

export default function HeaderMain({onClose}: HeaderMainProps) {

  const [tabValue, setTabValue] = useState<Tabs>('content')
  const [header, setHeader] = useState<Item>(initialHeaderValue)

  function handleTabChange(value: Tabs) {
    setTabValue(value)
  }

  function handleHeaderDataChange(value: HeaderContent) {
    setHeader(old => ({...old, content: value}))
  }

  return (
    <>
      <ItemTitle title="Header" onClose={onClose} />
      <ItemTopMenu onTabChange={handleTabChange} />
      {tabValue == 'content' && (
        <ItemContentComponent item={header} onDataChange={handleHeaderDataChange} />
      )}
      {tabValue == 'design' && (
        <ItemDesignComponent />
      )}
    </>
  )
}
