'use client'
import { useEffect, useState } from "react";
import "./style.css";
import FirebaseConfig from "@/config/firebase.config";
import { Item, Link } from "@/component/items/link/link.types";
import { get, ref } from "firebase/database";

const database = FirebaseConfig()

interface PageProps {
  params: { slug: string }
}

export default function Page({params}: PageProps) {
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const x = await get(ref(database, `links`))
    const val = x.val()
    const data = Object.entries(val).map(([key, value]) => ({...(value as Item), id: key}))
    setItems(data)
  }

  return (
    <>
      <div className="top-header">
        <img className="profile-img" src="https://taplink.st/a/3/7/f/e/3e9f1b.jpg?1" />
      </div>
      <div className="items-section">
        {items && items.map(item => {
          const link = item as Link
          return (
            <div key={link.id} className="item-section">
              <div className="item">
                <div 
                  className="rounded-md p-4"
                  style={{
                    boxShadow: 'rgba(10, 11, 13, 0.08) 0px 2px 4px 0px', 
                    backgroundColor: `${link.design?.backgroundColor ?? '#fff'}`,
                    border: `${link.design?.borderWidth ?? '0'}px solid`,
                    borderColor: `${link.design?.borderColor ?? '#fff'}`,
                    borderRadius: `${link.design?.borderRadius ?? '0'}px`
                  }}
                >
                  <div
                    className="item-title" 
                    style={{
                      fontSize: '.875rem', 
                      fontWeight: 600,
                      color: `${link.design?.color ?? '#000'}`
                    }}
                  >
                    {link.content.title}
                  </div>
                  <div 
                    className="item-url" 
                    style={{
                      fontSize: '.875rem', 
                      fontWeight: 400,
                      color: `${link.design?.color ?? '#000'}`
                    }}
                  >
                    {link.content.url}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
