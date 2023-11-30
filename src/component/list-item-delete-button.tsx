import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { useState } from "react";

export default function ListItemDeleteButton({onClick}: {onClick: () => Promise<void>}) {
  
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleDialogClose() {
    setDialogOpen(false)
  }

  async function handleDeleteButtonClick() {
    setTimeout(async () => {
      try {
        await onClick()
        setDialogOpen(false)
      } catch (error) {
        console.log('KAPANMADI')
      }
    }, 200)
  }
  
  return(
    <>
      <button onClick={() => setDialogOpen(true)} className="flex items-center justify-center rounded-full p-2 hover:bg-gray-100 me-1" style={{border: '1px solid #f1f3f6'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      </button>
      <Dialog 
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Link will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button color="error" onClick={handleDeleteButtonClick} autoFocus>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}