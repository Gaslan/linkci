import { Item, Link } from "@/component/items/link/link.types";

interface LinkProps {
  item: Item
}

export default function Link({item}: LinkProps) {

  const link = item as Link

  return (
    <div className="mb-4">
      <div className="rounded-md bg-white p-4" style={{boxShadow: 'rgba(10, 11, 13, 0.08) 0px 2px 4px 0px'}}>
        <div className="item-title" style={{fontSize: '.875rem', fontWeight: 600}}>{link.content.title}</div>
        <div className="item-url" style={{fontSize: '.875rem', fontWeight: 400}}>{link.content.url}</div>
      </div>
    </div>
  )
}
