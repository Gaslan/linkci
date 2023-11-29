'use client'
import AddItemDrawer from "@/component/add-item/add-item-drawer";
import AddLinkButton from "@/component/add-link-button";
import Topbar from "@/component/layout/topbar";
import Topnav from "@/component/layout/topnav";
import LinkListItem from "@/component/link-list-item";
import FirebaseConfig from "@/config/firebase.config";
import { Item, ViewMode } from "@/config/types";
import { get, ref } from "firebase/database";
import { Alert, Modal, ModalBody } from "flowbite-react";
import { useState, useEffect } from "react";

const database = FirebaseConfig()

export default function LinkAddPage() {

  const [viewMode, setViewMode] = useState<ViewMode>('edit')
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    async function getData() {
      
      const x = await get(ref(database, `links`))
      const val = x.val()
      const data = Object.entries(val).map(([key, value]) => ({...(value as Item), id: key}))
      setItems(data)
    }

    getData()
  }, [])

  function handlePrevievButtonClick(viewMode: ViewMode) {
    setViewMode(viewMode == 'edit' ? 'preview' : 'edit')
  }

  function handleItemDelete(item: Item) {
    if (!items) {
      return
    }
    const newItems = items.filter(x => x.id !== item.id)
    setItems([...newItems])
  }

  return (
    <>
      <Topbar
        viewMode={viewMode}
        onViewModeChange={handlePrevievButtonClick}/>

      <Topnav />
      

      <div className="main-content">
        <div className="flex items-center justify-center h-[calc(100dvh-120px)]">
          <div className={`grow h-[calc(100dvh-120px)] ${viewMode == 'edit' ? 'block' : 'hidden  md:block'}`} style={{overflowY: 'auto'}}>
            <div className="px-4 py-6 flex items-center justify-center">
              <AddLinkButton />
            </div>
            <div className="links px-4">
              {(items && items.length > 0) && (
                items.map(item => (
                  <LinkListItem key={item.id} item={item} onItemDelete={handleItemDelete} />
                ))
              )}
            </div>
          </div>
          <div className={`grow h-[calc(100dvh-120px)] border-l ${viewMode == 'preview' ? 'block' : 'hidden  md:block'}`}>
            <div className="w-full h-full flex p-6">
              <div className="w-full border-4 border-gray-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <AddItemDrawer />
    </>
  )
}