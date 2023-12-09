export interface Item {
  id: string
  type: ItemType
  createdAt: string
}

export interface Link extends Item {
  content: LinkContent
  design: LinkDesign
}

export interface LinkContent {
  url: string
  title: string
  subTitle: string
}

export interface LinkDesign {
  borderColor: string
  borderWidth: number
  borderRadius: string
  backgroundColor: string
  color: string
}

export type ItemType = 'link' | 'divider' | 'text'
