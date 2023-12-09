import { useState } from "react";
import LinkContentComponent from "./link-content";
import LinkTitle from "./link-title";
import LinkTopMenu, { Tabs } from "./link-top-menu";
import { Link, LinkContent, LinkDesign } from "../link.types";
import LinkDesignComponent from "./link-design";

interface LinkBaseProps {
  link: Link
  onDataChange: (value: Link) => void
}

export default function LinkBase({link, onDataChange}: LinkBaseProps) {

  const [tabValue, setTabValue] = useState<Tabs>('content')
  const [linkContent, setLinkContent] = useState<LinkContent>(link.content)
  const [linkDesign, setLinkDesign] = useState<LinkDesign>(link.design)

  function handleTabChange(value: Tabs) {
    setTabValue(value)
  }

  function handleContentDataChange(value: LinkContent) {
    setLinkContent(value)
    onDataChange({...link, content: linkContent})
  }

  function handleDesignDataChange(value: LinkDesign) {
    setLinkDesign(value)
    onDataChange({...link, design: value})
  }

  return (
    <div className="grow flex flex-col">
      <LinkTitle title="Link" />
      <LinkTopMenu onTabChange={handleTabChange} />
      {tabValue == 'content' && (
        <LinkContentComponent link={link} onDataChange={handleContentDataChange} />
      )}
      {tabValue == 'design' && (
        <LinkDesignComponent link={link} onDataChange={handleDesignDataChange} />
      )}
      {/* <button onClick={addLink} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md h-12 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button> */}
    </div>
  )
}
