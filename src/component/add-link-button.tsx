import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import AddItemDrawer from "./add-item/add-item-drawer";

interface AddLinkButtonProps {
  onLinkAdded: () => void
  onButtonClick: () => void
}

export default function AddLinkButton({onLinkAdded, onButtonClick}: AddLinkButtonProps) {

  const [open, setOpen] = useState(false)

  function handleAddButtonClick() {
    setOpen(true)
    onButtonClick()
  }

  function handleLinkAdded() {
    onLinkAdded()
    setOpen(false)
  }

  return (
    <>
      <div className="w-full">
        <button onClick={handleAddButtonClick} className=" rounded-xl border-0 border-dashed border-gray-300 hover:border-gray-600 text-white bg-[#2564cf] hover:bg-[#1954b9] flex items-center justify-center py-2 px-4 w-full h-12" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5z"/></svg>
          <span className="ml-2">Add Item</span>
        </button>
      </div>
      {/* <SwipeableDrawer
        anchor="bottom"
        open={open}
        onOpen={() => {setOpen(true)}}
        onClose={() => {setOpen(false)}}>
          <AddItemDrawer onLinkAdded={handleLinkAdded} />
      </SwipeableDrawer> */}
    </>

  )
}
