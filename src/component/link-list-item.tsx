import FirebaseConfig from "@/config/firebase.config";
import { Item } from "@/config/types";
import { push, ref, remove } from "firebase/database";
import { useState } from "react";
import ListItemEditButton from "./list-item-edit-button";
import ListItemDeleteButton from "./list-item-delete-button";

const database = FirebaseConfig()

export default function LinkListItem({item, onItemDelete}: {item: Item, onItemDelete: (item: Item) => void}) {

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
    
    // remove(linksRef).then(() => {
    // }).catch((e) => {
    //   console.log('hata: ', e)
    // })
  }

  return (
    <div className="border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 rounded-md mb-2">
      <div className="rounded-md flex item-center justify-between p-4" onClick={() => handleExpandButtonClick(expanded)} style={{userSelect: 'none', cursor: 'pointer'}}>
        <div>
          <div className="item-title" style={{fontSize: '.875rem', fontWeight: 600}}>{item.title}</div>
          <div className="item-url" style={{fontSize: '.875rem', fontWeight: 400}}>{item.url}</div>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={() => handleExpandButtonClick(expanded)} className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{transform: `rotateZ(${expanded ? '180deg' : '0deg'})`, transition: 'transform ease .2s'}}>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"/>
            </svg>
          </button>
        </div>
      </div>
      {expanded && (
        <div>
          <div className="">
            <hr />
          </div>
          <div className="flex p-4">
            <ListItemDeleteButton onClick={handleDeleteButtonClick} />
            <ListItemEditButton />
          </div>
        </div>
      )}
    </div>
  )
}