import { useState } from "react"
import SelectItems from "./select-items"
import AddDivider from "./add-divider"
import AddText from "./add-text"
import AddLink from "../items/link/add-link"
import HeaderMain from "../items/header/header-main"

export type ItemType = 'link' | 'divider' | 'text' | 'header'

interface AddItemDrawerProps {
  onLinkAdded: () => void
  onClose: () => void
}

export default function AddItemDrawer({onLinkAdded, onClose}: AddItemDrawerProps) {

  const [selectedItem, setSelectedItem] = useState<ItemType>()

  function handleItemSelect(itemtype: ItemType) {
    setTimeout(() => setSelectedItem(itemtype), 200)
  }

  function handleLinkAdded() {
    onLinkAdded()
  }

  function getView() {
    switch (selectedItem) {
      case 'link':
        return <AddLink onItemAdded={handleLinkAdded} />
      case 'divider':
        return <AddDivider />
      case 'text':
        return <AddText />
      case 'header':
        return <HeaderMain onClose={onClose} />
      default:
        return <SelectItems onItemSelect={handleItemSelect} />
    }
  }

  function getTitle() {
    switch (selectedItem) {
      case 'link':
        return 'Add Link'
      case 'divider':
        return 'Add Divider'
      case 'text':
        return 'Add Text'
      default:
        return 'Add Item'
    }
  }

  return  (
    <div id="drawer-bottom-example" className="flex flex-col w-full h-full flex flex-col rounded-t-md transition-transform bg-[#f5f7fa] dark:bg-gray-800 relative">
      { getView() }
    </div>
  )
}
