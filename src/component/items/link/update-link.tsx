import { useRef, useState } from "react";
import LinkBase from "./partials/link-base";
import { ref, serverTimestamp, update } from "firebase/database";
import FirebaseConfig from "@/config/firebase.config";
import { Item, Link } from "./link.types";

interface UpdateLinkProps {
  link: Link
  onUpdated: (item: Item) => void
}

const database = FirebaseConfig()

export default function UpdateLink({link: linkObj, onUpdated}: UpdateLinkProps) {

  const[link, setLink] = useState<Link>(linkObj)

  async function updateLink() {

    try {
      const itemRef = ref(database, `links/${link.id}`)
      await update(itemRef, {
        content: link.content,
        design: link.design
      })
      const newItem = {...link, content: link.content, design: link.design}
      onUpdated(newItem)
    } catch (error) {
      console.log('ERROR: ' + error)
    }

  }

  return (
    <>
      <LinkBase link={link} onDataChange={() => {}} />
      <div className="p-4">
        <button onClick={updateLink} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md h-12 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
      </div>
    </>
  )
}
