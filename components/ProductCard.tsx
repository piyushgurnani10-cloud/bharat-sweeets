
import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#F3CF7A]/30 flex flex-col h-full">
      {/* Product Image Section */}
      <div className="relative overflow-hidden aspect-square p-4">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-1000"
        />
        {/* Category Tag Overlay */}
        <div className="absolute top-8 right-8">
          <span className="text-[10px] bg-[#FFFAEC]/90 backdrop-blur-sm text-[#AA2B1D] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-sm border border-[#F3CF7A]/50">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Product Info Section */}
      <div className="p-8 pt-4 flex flex-col flex-grow">
        <div className="mb-6">
          {/* Product Name */}
          <h3 className="text-xl font-bold text-[#AA2B1D] group-hover:text-[#CC561E] transition-colors uppercase tracking-tight leading-tight mb-2">
            {product.name}
          </h3>
          
          {/* Price - Now BIG and BOLD as requested */}
          <div className="flex items-baseline gap-1">
             <span className="text-4xl font-black text-[#AA2B1D] tracking-tighter">
              ₹{product.price}
            </span>
            <span className="text-[10px] font-bold text-[#AA2B1D]/40 uppercase tracking-widest ml-1">per pack</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-8 leading-relaxed flex-grow font-medium">
          {product.description}
        </p>
        
        {/* Bottom Actions */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-t border-[#F3CF7A]/20 pt-6">
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#AA2B1D] w-4' : 'bg-[#F3CF7A]'}`}></span>
              ))}
            </div>
            <div className="text-[9px] font-bold text-[#CC561E] uppercase tracking-[0.2em]">In Stock</div>
          </div>

          <button 
            onClick={() => onAddToCart(product)}
            className="w-full flex items-center justify-center gap-3 bg-[#AA2B1D] text-[#F3CF7A] px-6 py-4 rounded-2xl text-xs font-bold tracking-[0.2em] hover:bg-[#CC561E] hover:text-white transition-all transform active:scale-95 shadow-[0_10px_30px_rgba(170,43,29,0.2)]"
          >
            <Plus className="w-4 h-4" /> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
