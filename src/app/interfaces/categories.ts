export interface Root {
  categories: Category[]
}

export interface Category {
  id: number
  name: string
  description: string
  icon: string
}
