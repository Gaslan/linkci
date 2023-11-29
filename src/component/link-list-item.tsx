import FirebaseConfig from "@/config/firebase.config";
import { Item } from "@/config/types";
import { push, ref, remove } from "firebase/database";
import { useState } from "react";

const database = FirebaseConfig()

export default function LinkListItem({item, onItemDelete}: {item: Item, onItemDelete: (item: Item) => void}) {

  const [expanded, setExpanded] = useState<boolean>(false)

  function handleExpandButtonClick(value: boolean) {
    setExpanded(!value)
  }

  function handleDeleteButtonClick() {
    const linksRef = ref(database, `links/${item.id}`)
    remove(linksRef).then(() => {
      onItemDelete(item)
    }).catch((e) => {
      console.log('hata: ', e)
    })
  }

  return (
    <div className="border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 rounded-md mb-2 p-4" onClick={() => handleExpandButtonClick(expanded)} style={{userSelect: 'none', cursor: 'pointer'}}>
      <div className="rounded-md flex item-center justify-between">
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
          <div className="py-4">
            <hr />
          </div>
          <div className="flex">
            <button onClick={handleDeleteButtonClick} className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100 me-1" style={{border: '1px solid #f1f3f6'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
            <button className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100 me-1" style={{border: '1px solid #f1f3f6'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}