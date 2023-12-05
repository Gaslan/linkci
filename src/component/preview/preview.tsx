import { Item } from "../items/link/link.types"
import Link from "./items/link"

interface PreviewProps {
  items: Item[] | undefined
}

export default function Preview({items}: PreviewProps) {

  function itemSelector(item: Item) {
    if (item.type == 'link') {
      return <Link item={item} />
    }
    return null
  }

  return (
    <div className="p-6">
      {items && (
        items.map(item => itemSelector(item))
      )}
    </div>
  )
}
