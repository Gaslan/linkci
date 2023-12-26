import { IconButton } from "@mui/material"

interface ItemTitleProps {
  title: string
  onClose: () => void
}

export default function ItemTitle({title, onClose}: ItemTitleProps) {
  return (
    <div className="panel-title w-full h-[60px] max-h-[60px] min-h-[60px] px-4 rounded-t-md transition-transform bg-white dark:bg-gray-800 flex items-center justify-between">
      <h5 id="drawer-bottom-label" className="inline-flex items-center text-lg font-semibold text-gray-400 dark:text-gray-400">
        { title }
      </h5>
      <IconButton onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
        </svg>
      </IconButton>
    </div>
  )
}
