//http://slajs-assets.s3-website.eu-north-1.amazonaws.com/
export interface MenuItemRemote {
  id: number
  type: string
  name: string
  imgUrl: string
  description: string
  price: number
  toppings?: string[] // Optional property
}

export type QueryParams = {
  idWithCategory?: string
}

export type MenuItemsResponseWithParams = MenuItemsResponse & {
  params: QueryParams
}

export interface MenuItemsResponse {
  items: MenuItemRemote[]
}

export type ApiResponse = {
  // Define the structure of your API response here
  items: any[]
}

export interface MenuItemsAxiosResponse extends ApiResponse {
  data: { items: MenuItemRemote[] | [] }
}
export interface MenuItem {
  id: number
  title: string
  category: string
  price: number
  img: string
  desc: string
}

export type CartItem = {
  cartID: string
  productID: number
  image: string
  title: string
  price: string
  amount: number
  productColor: string
  company: string
}

export type MappedCartItem = {
  cartItem: CartItem
}

export type CartState = {
  cartItems: CartItem[]
  //products: CartItem[] (refracture from)
  numItemsInCart: number
  cartTotal: number
  shipping: number
  tax: number
  orderTotal: number
}
