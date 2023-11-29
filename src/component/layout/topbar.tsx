import { ViewMode } from "@/config/types";

export default function Topbar({viewMode, onViewModeChange}: {viewMode: ViewMode, onViewModeChange: (viewMode: ViewMode) => void}) {
  
  return (
    <div className="topbar">
      <div className="logo flex items-center px-4 py-2">
        <svg className="css-ze2te4 css-qd6ojx h-8" viewBox="0 0 100 100">
          <g transform="translate(-12.5, -12.5) scale(1.25)" className="css-r3o01a" fill="#2564cf">
            <path xmlns="http://www.w3.org/2000/svg" d="M35,65.833c0-8.587,3.535-16.36,9.219-21.956c-3.063-1.406-6.458-2.21-10.052-2.21C20.82,41.667,10,52.487,10,65.833  C10,79.18,20.82,90,34.167,90c3.594,0,6.988-0.804,10.052-2.21C38.535,82.194,35,74.421,35,65.833z"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M65.833,65c-8.587,0-16.36-3.535-21.956-9.222c-1.406,3.066-2.21,6.461-2.21,10.055C41.667,79.18,52.487,90,65.833,90  C79.18,90,90,79.18,90,65.833c0-3.594-0.804-6.988-2.21-10.055C82.194,61.465,74.421,65,65.833,65z"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M65.833,10c-3.594,0-6.988,0.804-10.055,2.21C61.465,17.806,65,25.579,65,34.167c0,8.587-3.535,16.36-9.222,21.956  c3.066,1.406,6.461,2.21,10.055,2.21C79.18,58.333,90,47.513,90,34.167C90,20.82,79.18,10,65.833,10z"></path>
            <path xmlns="http://www.w3.org/2000/svg" d="M34.167,35c8.587,0,16.36,3.535,21.956,9.219c1.406-3.063,2.21-6.458,2.21-10.052C58.333,20.82,47.513,10,34.167,10  C20.82,10,10,20.82,10,34.167c0,3.594,0.804,6.988,2.21,10.052C17.806,38.535,25.579,35,34.167,35z"></path>
          </g>
        </svg>
        <span className="font-semibold text-xl" style={{marginLeft: '1rem'}}>Linkci</span>
      </div>
      <div className="logo flex items-center px-4 py-2">
        <button onClick={() => onViewModeChange(viewMode)} className="bg-gray-50 border border-gray-50 text-[#2564cf] rounded-md text-sm font-semibold py-2 px-3 flex items-center justify-center">
          {(viewMode == 'edit') 
            ? (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><path d="M10 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/><path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41c.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clipRule="evenodd"/></g></svg>)
            : (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157l3.712 3.712l1.157-1.157a2.625 2.625 0 0 0 0-3.712m-2.218 5.93l-3.712-3.712l-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32z"/><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5z"/></g></svg>)
          }
          <span className="ml-1">{viewMode == 'edit' ? 'Preview' : 'Edit'}</span>
        </button>
      </div>
    </div>
  )
}