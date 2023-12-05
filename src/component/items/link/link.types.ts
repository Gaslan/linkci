export interface Item {
  id: string
  type: ItemType
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
  backgroundColor: string
  textColor: string
  icon?: string
  borderRadius: string
}

export type ItemType = 'link' | 'divider' | 'text'