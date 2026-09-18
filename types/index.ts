export type ShopCategory =
  | "All"
  | "New Arrivals"
  | "Kurtis"
  | "Tops"
  | "Dresses"
  | "Suit Sets"
  | "Anarkalis"
  | "Sarees"
  | "Dupattas"
  | "Unstitched Suits"
  | "Men Shirts"
  | "Men Kurtas"
  | "Men Jackets"
  | "Home Decor"
  | "Accessories";

export type FabricType =
  | "Cotton"
  | "Mulmul"
  | "Chanderi"
  | "Kota Doria"
  | "Modal"
  | "Chiffon"
  | "Linen"
  | "Tissue";

export type CraftTechnique =
  | "Hand Block Print"
  | "Dabu Mud Resist"
  | "Bagru Natural Dye"
  | "Sanganeri Fine Block"
  | "Jal Block Print"
  | "Butti Stamp";

export interface Product {
  id: string;
  name: string;
  displayTitle?: string;
  subtitle?: string;
  category: ShopCategory;
  collection: string;
  price: number;
  originalPrice?: number;
  image: string;
  alternateImage?: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  craftTechnique: CraftTechnique | string;
  fabric: FabricType | string;
  material: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  stockStatus: "In Stock" | "Low Stock" | "Sold Out";
  sku?: string;
  garmentLength?: string;
  careInstructions?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  area: string;
  city: string;
  phone: string;
  mapLink?: string;
}

export interface FilterState {
  category: string;
  fabric: string;
  craft: string;
  size: string;
  maxPrice: number;
  sortBy: "featured" | "newest" | "price-low" | "price-high";
}

export type OrderStatus =
  | "Processing"
  | "Hand Block Printing"
  | "Dispatched"
  | "Delivered";

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  orderTime: string;
  deliveryAddress: string;
}

