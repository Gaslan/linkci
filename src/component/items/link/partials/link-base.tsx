import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import LinkContent, { LinkContentHandle } from "./link-content";
import LinkTitle from "./link-title";
import LinkTopMenu, { Tabs } from "./link-top-menu";
import { Link } from "../link.types";

export interface LinkBaseHandle {
  getContentData: () => LinkContent | undefined
}

interface LinkBaseProps {
  link: Link
}

const LinkBase = forwardRef<LinkBaseHandle, LinkBaseProps>(function LinkBase({link}: LinkBaseProps, ref) {

  const [tabValue, setTabValue] = useState<Tabs>('content')
  const contentRef = useRef<LinkContentHandle>(null)

  useImperativeHandle(ref, () => {
    return {
      getContentData(): LinkContent | undefined {
        return contentRef.current?.getData()
        // return contentRef.current ? contentRef.current.getData() : null
      }
    }
  })

  function handleTabChange(value: Tabs) {
    setTabValue(value)
  }

  return (
    <div>
      <LinkTitle title="Link" />
      <LinkTopMenu onTabChange={handleTabChange} />
      {tabValue == 'content' && (
        <LinkContent link={link} ref={contentRef} />
      )}
      {tabValue == 'design' && (
        <div>Design Tab</div>
      )}
      {/* <button onClick={addLink} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md h-12 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button> */}
    </div>
  )
})

export default LinkBase
