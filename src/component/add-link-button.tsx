export default function AddLinkButton(params:any) {
  return (
    <div className="w-full">
      <button className=" rounded-xl border border-dashed border-gray-300 hover:border-gray-600 text-gray-800 hover:text-black bg-white hover:bg-gray-50 flex items-center justify-center py-2 px-4 w-full h-12" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5z"/></svg>
        <span className="ml-2">Add Item</span>
      </button>
    </div>
  )
}