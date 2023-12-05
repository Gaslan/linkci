import { ItemType } from "./add-item-drawer";

export default function SelectItems({onItemSelect}: {onItemSelect: (itemtype: ItemType) => void}) {
  return  (
    <div className="flex items-center gap-4 text-gray-500 p-4">
      <button onClick={() => onItemSelect('link')} className="bg-gray-50 hover:bg-gray-100 active:bg-gray-300 grow border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 h-[calc((100vw-4rem)/3)] w-full focus:outline-none focus:ring focus:ring-gray-200 aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><g fill="currentColor"><path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865a.75.75 0 0 0 .977-1.138a2.5 2.5 0 0 1-.142-3.667l3-3"/><path d="M11.603 7.963a.75.75 0 0 0-.977 1.138a2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865"/></g></svg>
        <div className="text-sm font-semibold">Link</div>
      </button>
      <button onClick={() => onItemSelect('divider')} className="bg-gray-50 grow border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 h-[calc((100vw-4rem)/3)] w-full focus:outline-none focus:ring focus:ring-gray-200 aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 7.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5" clipRule="evenodd"/></svg>
        <div className="text-sm font-semibold">Divider</div>
      </button>
      <button onClick={() => onItemSelect('text')} className="bg-gray-50 grow border border-gray-200 rounded-md flex flex-col items-center justify-center gap-4 h-[calc((100vw-4rem)/3)] w-full focus:outline-none focus:ring focus:ring-gray-200 aspect-square">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M5.999 2c.31 0 .59.192.7.482l2.27 5.939c.02.04.035.082.048.125l.037.099l-.793 2.127L7.776 9.5H4.221l-.772 2.021a.75.75 0 0 1-1.401-.536l3.25-8.503a.75.75 0 0 1 .7-.482M4.795 8h2.407L6 4.85zm7.908-2.51a.75.75 0 0 0-1.405 0L7.193 16.5h-.438a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-.461l.747-2.003h4.919l.746 2.003h-.455a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.444zm1.197 7.507h-3.8L12 7.899z"/></svg>
        <div className="text-sm font-semibold">Text</div>
      </button>
    </div>
  )
}