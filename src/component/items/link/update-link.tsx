import { useRef } from "react";
import LinkBase, { LinkBaseHandle } from "./partials/link-base";
import { ref, update } from "firebase/database";
import FirebaseConfig from "@/config/firebase.config";
import { Item, Link } from "./link.types";

interface UpdateLinkProps {
  link: Link
  onUpdated: (item: Item) => void
}

const database = FirebaseConfig()

export default function UpdateLink({link, onUpdated}: UpdateLinkProps) {

  const linkBaseRef = useRef<LinkBaseHandle>(null)

  async function updateLink() {
    const refHandler = linkBaseRef.current
    if (!refHandler) {
      return
    }
    
    const content = refHandler.getContentData()
    console.log(content)

    try {
      const itemRef = ref(database, `links/${link.id}`)
      await update(itemRef, {
        content: {
          url: content?.url,
          title: content?.title
        },
        design: {

        }
      })
      const newItem = {...link}
      if (content) {
        newItem.content = content
      }
      onUpdated(newItem)
    } catch (error) {
      console.log('ERROR: ' + error)
    }

  }

  return (
    <>
      <LinkBase link={link} ref={linkBaseRef} />
      <div className="p-4">
        <button onClick={updateLink} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md h-12 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
      </div>
    </>
  )
}
