import { useRef } from "react";
import LinkBase, { LinkBaseHandle } from "./partials/link-base";
import { push, ref, serverTimestamp, set } from "firebase/database";
import FirebaseConfig from "@/config/firebase.config";
import { Link } from "./link.types";

const link: Link = {
  id: '',
  type: 'link',
  content: {
    title: '',
    subTitle:'',
    url:''
  },
  design: {
    backgroundColor: '',
    borderRadius: '',
    textColor:'',
    icon: ''
  }
}

const database = FirebaseConfig()

export default function AddLink({onItemAdded}: {onItemAdded: () => void}) {

  const linkBaseRef = useRef<LinkBaseHandle>(null)

  async function addLink() {
    const refHandler = linkBaseRef.current
    if (!refHandler) {
      return
    }
    
    const content = refHandler.getContentData()
    console.log(content)

    try {
      const linksRef = ref(database, `links`)
      const newDataRef = await push(linksRef)
      await set(newDataRef, {
        type: 'link',
        content: {
          url: content?.url,
          title: content?.title,
          createdAt: serverTimestamp()
        },
        design: {

        }
      })
      onItemAdded()
    } catch (error) {
      console.log('ERROR: ' + error)
    }
    
  }

  return (
    <>
      <LinkBase link={link} ref={linkBaseRef} />
      <div className="p-4">
        <button onClick={addLink} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md h-12 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
      </div>
    </>
  )
}
