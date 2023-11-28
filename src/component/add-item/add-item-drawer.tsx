import { useState } from "react"
import SelectItems from "./select-items"
import AddLink from "./add-link"
import AddDivider from "./add-divider"
import AddText from "./add-text"

export type ItemType = 'link' | 'divider' | 'text'

export default function AddItemDrawer() {

  const [selectedItem, setSelectedItem] = useState<ItemType>()

  function handleItemSelect(itemtype: ItemType) {
    setTimeout(() => setSelectedItem(itemtype), 200)
    
  }

  function handleCloseDrawer() {
    setTimeout(() => setSelectedItem(undefined), 200)
  }

  function getView() {
    switch (selectedItem) {
      case 'link':
        return <AddLink />
      case 'divider':
        return <AddDivider />
      case 'text':
        return <AddText />
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
    <div id="drawer-bottom-example" className="fixed bottom-0 left-0 right-0 z-40 w-full p-4 rounded-t-md overflow-y-auto transition-transform bg-white dark:bg-gray-800 translate-y-full" tabIndex={-1} aria-labelledby="drawer-bottom-label">
      <h5 id="drawer-bottom-label" className="inline-flex items-center mb-8 text-lg font-semibold text-gray-400 dark:text-gray-400">
        {selectedItem && (
          <button onClick={() => setSelectedItem(undefined)} type="button" className="me-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full w-8 h-8 text-sm inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 256 256">
              <path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12"/>
            </svg>
          </button>
        )}
        { getTitle() }
      </h5>
      <button onClick={handleCloseDrawer} type="button" data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      { getView() }
    </div>
  )
}