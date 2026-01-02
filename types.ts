
export enum Category {
  SWEETS = 'Sweets',
  SAVOURIES = 'Savouries',
  GIFT_BOXES = 'Gift Boxes',
  FESTIVAL_SPECIAL = 'Festival Special'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
