export default function Topnav() {
  
  return (
    <div className="topnav">
      <nav className="h-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto h-full">
          <div className="w-full md:block md:w-auto px-4" id="navbar-default">
            <ul className="font-medium flex flex-row p-0 border border-gray-100 rounded-lg bg-gray-50 mt-0 space-x-2 md:space-x-4 rtl:space-x-reverse border-0 bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-[#2564cf] rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-700" style={{color: '#2564cf'}}>Content</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Design</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
