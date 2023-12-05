'use client'
import ItemsMain from "@/component/items/items-main";
import Topbar from "@/component/layout/topbar";
import Topnav from "@/component/layout/topnav";
import { ViewMode } from "@/config/types";
import { useState } from "react";


export default function LinkAddPage() {

  const [viewMode, setViewMode] = useState<ViewMode>('edit')
  
  function handlePrevievButtonClick(viewMode: ViewMode) {
    setViewMode(viewMode == 'edit' ? 'preview' : 'edit')
  }

  return (
    <>
      <Topbar
        viewMode={viewMode}
        onViewModeChange={handlePrevievButtonClick}/>

      <Topnav />
      
      <div className="main-content">
        <ItemsMain viewMode={viewMode} />
      </div>
    </>
  )
}
