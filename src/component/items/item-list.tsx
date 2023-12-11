import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import ItemListItem from "./item-list-item"
import { Item } from "./link/link.types"
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';

interface ItemListProps {
  items: Item[]
  onItemDelete: (item: Item) => void
  onItemUpdate: (item: Item) => void
  onItemOrderChange: (oldIndex: number, newIndex: number) => void
}

export default function ItemList({items, onItemDelete, onItemUpdate, onItemOrderChange}: ItemListProps) {
  console.log('Items lis', items)
  
  // const [items, setItems] = useState<Item[]>(itemList)

  function handleItemDelete(item: Item) {
    onItemDelete(item)
  }

  function handleItemUpdate(item: Item) {
    onItemUpdate(item)
  }

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event
    const activeIndex = items.findIndex(item => active.id == item.id)
    const overIndex = items.findIndex(item => over?.id == item.id)
    if (activeIndex >= 0 && overIndex >= 0) {
      onItemOrderChange(activeIndex, overIndex)
    }
  }

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  })

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  })

  const sensors = useSensors(
    touchSensor,
    mouseSensor
  );

  return (
    <>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} sensors={sensors}>
        <div className="links px-4">
          <SortableContext items={items.map(item => item.id)} strategy={verticalListSortingStrategy}>
          {items && (
            items.map(item => (
              <ItemListItem key={item.id} item={item} onItemDelete={handleItemDelete} onItemUpdate={handleItemUpdate} />
            ))
          )}
          </SortableContext>
        </div>
      </DndContext>
    </>
  )
}
