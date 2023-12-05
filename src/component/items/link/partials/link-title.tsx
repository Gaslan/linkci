export default function LinkTitle({title}: {title: string}) {
  return (
    <div className="panel-title w-full px-4 pb-3 pt-6 rounded-t-md overflow-y-auto transition-transform bg-white dark:bg-gray-800">
      <h5 id="drawer-bottom-label" className="inline-flex items-center text-lg font-semibold text-gray-400 dark:text-gray-400">
        { title }
      </h5>
    </div>
  )
}