import { Item } from "../items/link/link.types"
import Link from "./items/link"

interface PreviewProps {
  items: Item[] | undefined
}

export default function Preview({items}: PreviewProps) {

  function itemSelector(item: Item) {
    if (item.type == 'link') {
      return <Link key={item.id} item={item} />
    }
    return null
  }

  return (
    <div className="p-6 h-full overflow-y-auto">
      {items && (
        items.map(item => itemSelector(item))
      )}
    </div>
  )
}
