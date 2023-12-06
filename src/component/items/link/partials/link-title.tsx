import { IconButton } from "@mui/material";

export default function LinkTitle({title}: {title: string}) {
  return (
    <div className="panel-title w-full px-4 py-3 rounded-t-md overflow-y-auto transition-transform bg-white dark:bg-gray-800 flex items-center justify-between">
      <h5 id="drawer-bottom-label" className="inline-flex items-center text-lg font-semibold text-gray-400 dark:text-gray-400">
        { title }
      </h5>
      <IconButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
        </svg>
      </IconButton>
    </div>
  )
}
