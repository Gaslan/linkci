import FirebaseConfig from "@/config/firebase.config";
import { ref, remove } from "firebase/database";
import { useState } from "react";
import { Item, Link } from "./link/link.types";
import ListItemDeleteButton from "../list-item-delete-button";
import ListItemEditButton from "../list-item-edit-button";

interface LinkListItemProps {
  item: Item, 
  onItemDelete: (item: Item) => void
  onItemUpdate: (item: Item) => void
}

const database = FirebaseConfig()

export default function ItemListItem({item, onItemDelete, onItemUpdate}: LinkListItemProps) {

  const [expanded, setExpanded] = useState<boolean>(false)

  function handleExpandButtonClick(value: boolean) {
    setExpanded(!value)
  }

  async function handleDeleteButtonClick() {
    const linksRef = ref(database, `links/${item.id}`)
    try {
      await remove(linksRef)
      onItemDelete(item)
    } catch (error) {
      console.log('hata: ', error)
      throw new Error('ERROR: ' + error)
    }
  }

  function handleUpdated(item: Item) {
    onItemUpdate(item)
  }

  function itemSelector(item: Item) {

    if (item.type == 'link') {
      const link = item as Link
      return (
        <div>
          <div className="item-title" style={{fontSize: '.875rem', fontWeight: 600}}>{link.content.title}</div>
          <div className="item-url" style={{fontSize: '.875rem', fontWeight: 400}}>{link.content.url}</div>
        </div>
      )
    }

  }

  return (
    <div className="border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 rounded-md mb-2">
      <div className="rounded-md flex items-center" onClick={() => handleExpandButtonClick(expanded)} style={{userSelect: 'none', cursor: 'pointer'}}>
        <div className="flex items-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M14 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0ZM8 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"/>
          </svg>
        </div>
        <div className="rounded-md flex items-center justify-between p-4 ps-0 grow">
          { itemSelector(item) }
          <div className="flex items-center justify-center">
            <button onClick={() => handleExpandButtonClick(expanded)} className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{transform: `rotateZ(${expanded ? '180deg' : '0deg'})`, transition: 'transform ease .2s'}}>
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {expanded && (
        <div>
          <div className="">
            <hr />
          </div>
          <div className="flex p-4">
            <ListItemDeleteButton onClick={handleDeleteButtonClick} />
            <ListItemEditButton item={item} onUpdated={handleUpdated} />
          </div>
        </div>
      )}
    </div>
  )
}
