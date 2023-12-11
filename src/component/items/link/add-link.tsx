import { useState } from "react";
import LinkBase from "./partials/link-base";
import { push, ref, serverTimestamp, set } from "firebase/database";
import FirebaseConfig from "@/config/firebase.config";
import { Link } from "./link.types";

const initialValue: Link = {
  id: '',
  type: 'link',
  createdAt: '',
  content: {
    title: '',
    subTitle:'',
    url:''
  },
  design: {
    backgroundColor: '',
    borderRadius: '',
    color: '',
    borderColor: '',
    borderWidth: 0
  }
}

const database = FirebaseConfig()

export default function AddLink({onItemAdded}: {onItemAdded: () => void}) {

  const[link, setLink] = useState<Link>(initialValue)

  async function addLink() {
    try {
      const linksRef = ref(database, `links`)
      const newDataRef = await push(linksRef)
      await set(newDataRef, {
        type: 'link',
        createdAt: serverTimestamp(),
        content: link.content,
        design: link.design
      })
      onItemAdded()
    } catch (error) {
      console.log('ERROR: ' + error)
    }
  }

  function handleDataChange(value: Link) {
    setLink(value)
  }

  return (
    <>
      <LinkBase link={link} onDataChange={handleDataChange} />
      <div className="p-4 fixed bottom-0 w-full">
        <button onClick={addLink} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md h-12 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      </div>
    </>
  )
}
