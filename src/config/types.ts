export type ViewMode = 'edit' | 'preview'

export interface Item {
  id: string,
  title: string,
  url: string,
  createdAt: number
}