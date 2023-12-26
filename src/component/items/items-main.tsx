import { Drawer } from "@mui/material"
import AddLinkButton from "../add-link-button"
import ItemList from "./item-list"
import { Item, Link } from "./link/link.types"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { get, ref } from "firebase/database"
import FirebaseConfig from "@/config/firebase.config"
import { ViewMode } from "@/config/types"
import AddItemDrawer from "../add-item/add-item-drawer"
import UpdateLink from "./link/update-link"
import Preview from "../preview/preview"
import { arrayMove } from "@dnd-kit/sortable"

const database = FirebaseConfig()

interface ItemMainProps {
  viewMode: ViewMode
}

type ActiveProcess = 'addItem' | 'updateLink'

export default function ItemsMain({viewMode}: ItemMainProps) {

  const [items, setItems] = useState<Item[]>()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeProcess, setActiveProcess] = useState<ActiveProcess>()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const x = await get(ref(database, `links`))
    const val = x.val()
    const data = Object.entries(val).map(([key, value]) => ({...(value as Item), id: key}))
    setItems(data)
  }

  function handleItemDelete(item: Item) {
    if (!items) {
      return
    }
    const newItems = items.filter(x => x.id !== item.id)
    setItems([...newItems])
    toast.success('Item deleted...')
  }

  function handleItemUpdate(item: Item) {
    if (!items) {
      return
    }
    const index = items.findIndex(x => x.id === item.id)
    const newItems = [...items]
    newItems[index] = item
    setItems(newItems)
    toast.success('Item updated...')
  }

  function handleAddButtonClick() {
    setActiveProcess('addItem')
    setDrawerOpen(true)
  }

  function handleLinkAdded() {
    getData()
    setDrawerOpen(false)
    toast.success('Item added...')
  }

  function handleDrawerClose() {
    setDrawerOpen(false)
    setActiveProcess(undefined)
  }

  function activeProcessView() {
    if (activeProcess == 'addItem') {
      return <AddItemDrawer onLinkAdded={handleLinkAdded} onClose={handleDrawerClose} />
    }
    if (activeProcess == 'updateLink') {
      return <UpdateLink link={{} as Link} onUpdated={handleItemUpdate} />
    }
    return null
  }

  function handleItemOrderChange(oldIndex: number, newIndex: number): void {
    setItems(old => {
      return old ? arrayMove(old, oldIndex, newIndex) : old
    })
  }

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100dvh-120px)]">
        <div className={`grow h-[calc(100dvh-120px)] ${viewMode == 'edit' ? 'block' : 'hidden  md:block'}`} style={{overflowY: 'auto'}}>
          <div className="px-4 py-6 flex items-center justify-center">
            <AddLinkButton onLinkAdded={handleLinkAdded} onButtonClick={handleAddButtonClick}  />
          </div>
          <ItemList items={items ?? []} onItemDelete={handleItemDelete} onItemUpdate={handleItemUpdate} onItemOrderChange={handleItemOrderChange} />
        </div>
        <div className={`grow h-[calc(100dvh-120px)] border-l ${viewMode == 'preview' ? 'block' : 'hidden  md:block'}`}>
          <div className="w-full h-full flex p-6">
            <div className="w-full border-4 border-gray-800 rounded-lg">
              <Preview items={items} />
            </div>
          </div>
        </div>
      </div>
    
      <Drawer sx={{'& .MuiPaper-root': {height: '100%'}}}
        anchor="bottom"
        open={drawerOpen}
        onClose={handleDrawerClose}>
          { activeProcessView() }
      </Drawer>
    </>


  )
}
