'use client'
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Item, Link } from "./items/link/link.types";
import UpdateLink from "./items/link/update-link";

export default function ListItemEditButton({item, onUpdated}: {item: Item, onUpdated: (item: Item) => void}) {
  
  const [open, setOpen] = useState(false);

  function handleUpdated(item: Item) {
    setOpen(false)
    onUpdated(item)
  }
  
  return(
    <>
      <button onClick={() => setOpen(true)} className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100 me-1" style={{border: '1px solid #f1f3f6'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"/>
        </svg>
      </button>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={() => {setOpen(false)}}>
          <UpdateLink link={item as Link} onUpdated={handleUpdated} />
      </Drawer>
    </>
  )
}
