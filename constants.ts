
import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kaju Katli',
    description: 'Thin, diamond-shaped melt-in-the-mouth cashew fudge with edible silver leaf.',
    price: 450,
    category: Category.SWEETS,
    imageUrl: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400',
    tags: ['classic', 'mild', 'cashew']
  },
  {
    id: '2',
    name: 'Motichoor Ladoo',
    description: 'Fine gram flour globules fried in desi ghee and soaked in saffron syrup.',
    price: 320,
    category: Category.SWEETS,
    imageUrl: 'https://images.unsplash.com/photo-1589119634735-121b9973c2f5?auto=format&fit=crop&q=80&w=400',
    tags: ['traditional', 'sweet', 'saffron']
  },
  {
    id: '3',
    name: 'Gulab Jamun',
    description: 'Soft khoya balls deep-fried and dunked in rose-scented sugar syrup.',
    price: 280,
    category: Category.SWEETS,
    imageUrl: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=400',
    tags: ['hot', 'soft', 'classic']
  },
  {
    id: '4',
    name: 'Roasted Cashews',
    description: 'Premium jumbo cashews roasted with black salt and traditional spices.',
    price: 550,
    category: Category.SAVOURIES,
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa4f0c5276ed?auto=format&fit=crop&q=80&w=400',
    tags: ['salty', 'nutty', 'snack']
  },
  {
    id: '5',
    name: 'Masala Mathri',
    description: 'Crispy flaky crackers seasoned with cumin and black pepper.',
    price: 180,
    category: Category.SAVOURIES,
    imageUrl: 'https://images.unsplash.com/photo-1601050638917-3d844249a02d?auto=format&fit=crop&q=80&w=400',
    tags: ['spicy', 'crunchy', 'tea-time']
  },
  {
    id: '6',
    name: 'Royal Heritage Box',
    description: 'A curated selection of 16 premium sweets in a gold-embossed box.',
    price: 1200,
    category: Category.GIFT_BOXES,
    imageUrl: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?auto=format&fit=crop&q=80&w=400',
    tags: ['premium', 'assorted', 'luxury']
  },
  {
    id: '7',
    name: 'Pista Roll',
    description: 'Cylindrical rolls made of pistachio paste with a cardamom-infused center.',
    price: 600,
    category: Category.SWEETS,
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    tags: ['pistachio', 'nutty', 'green']
  },
  {
    id: '8',
    name: 'Saffron Rasmalai',
    description: 'Soft cottage cheese patties immersed in creamy saffron milk.',
    price: 350,
    category: Category.SWEETS,
    imageUrl: 'https://images.unsplash.com/photo-1605065522891-6b1229499216?auto=format&fit=crop&q=80&w=400',
    tags: ['milk-based', 'saffron', 'creamy']
  }
];

export const NAVIGATION_ITEMS = [
  { name: 'Shop Now', items: ['All Sweets', 'Best Sellers', 'Savouries'] },
  { name: 'Gifting', items: ['Occasions', 'Corporate Gifting', 'Custom Boxes'] },
  { name: 'Visit Our Farm', items: [] },
  { name: 'Store Locations', items: [] },
  { name: 'About Us', items: [] },
  { name: 'Contact Us', items: [] },
];
