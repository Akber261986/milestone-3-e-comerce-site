
export interface ClientsType {
  slug: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  position: string;
}
export interface PostType {
  slug: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  description: string;
}
export interface CartContextType {
  cartItems: PostType[];
  addToCart: (product: PostType) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  getTotalPrice: () => number;
}