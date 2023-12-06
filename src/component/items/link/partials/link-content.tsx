import { useState, forwardRef, ForwardedRef, useImperativeHandle } from "react";
import { Link, LinkContent } from "../link.types";

export interface LinkContentHandle {
  getData: () => LinkContent
}

interface LinkContentProps {
  link: Link
}

const LinkContentComponent = forwardRef<LinkContentHandle, LinkContentProps>(function LinkContent({link}: LinkContentProps, ref) {

  const [title, setTitle] = useState(link.content?.title)
  const [url, setUrl] = useState(link.content?.url)

  useImperativeHandle(ref, () => {
    return {
      getData(): LinkContent {
        return {
          title,
          subTitle: '',
          url
        }
      }
    }
  })

  return (
    <div className="p-4 text-sm">
      <label htmlFor="input-group-1" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20">
            <g fill="currentColor">
              <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865a.75.75 0 0 0 .977-1.138a2.5 2.5 0 0 1-.142-3.667l3-3"/>
              <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138a2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865"/>
            </g>
          </svg>
        </div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="url" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-12 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New link..."/>
      </div>
      <label htmlFor="input-group-1" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Link URL</label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20">
            <g fill="currentColor">
              <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865a.75.75 0 0 0 .977-1.138a2.5 2.5 0 0 1-.142-3.667l3-3"/>
              <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138a2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865"/>
            </g>
          </svg>
        </div>
        <input value={url} onChange={(e) => setUrl(e.target.value)} type="url" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-12 w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New link..."/>
      </div>
      <div className="hidden flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
      </div>
    </div>
  )
})

export default LinkContentComponent
