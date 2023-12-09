import ItemListItem from "./item-list-item"
import { Item } from "./link/link.types"

interface ItemListProps {
  items: Item[]
  onItemDelete: (item: Item) => void
  onItemUpdate: (item: Item) => void
}

export default function ItemList({items, onItemDelete, onItemUpdate}: ItemListProps) {
  console.log('Items lis', items)
  
  // const [items, setItems] = useState<Item[]>(itemList)

  function handleItemDelete(item: Item) {
    onItemDelete(item)
  }

  function handleItemUpdate(item: Item) {
    onItemUpdate(item)
  }

  return (
    <>
      <div className="links px-4">
        {items && (
          items.map(item => (
            <ItemListItem key={item.id} item={item} onItemDelete={handleItemDelete} onItemUpdate={handleItemUpdate} />
          ))
        )}
      </div>
    </>
  )
}
