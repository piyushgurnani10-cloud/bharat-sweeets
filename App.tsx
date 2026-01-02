
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import SweetAssistant from './components/SweetAssistant';
import { Category, Product, CartItem } from './types';
import { PRODUCTS } from './constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAEC]">
      <Navbar cartCount={cartCount} />
      
      <main className="flex-grow">
        <Hero />

        {/* Collection Section - Refined Tabs */}
        <section className="max-w-7xl mx-auto px-4 py-28">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[1px] w-12 bg-[#AA2B1D]"></div>
               <span className="text-[#CC561E] font-bold text-xs tracking-[0.5em] uppercase">Signature Selection</span>
               <div className="h-[1px] w-12 bg-[#AA2B1D]"></div>
            </div>
            <h2 className="text-6xl font-bold text-[#AA2B1D] mb-12 tracking-tighter uppercase">Taste The Tradition</h2>
            
            {/* Tabs for Multiple Categories/Pages */}
            <div className="flex flex-wrap justify-center gap-2 p-2 bg-[#F3CF7A]/10 rounded-[2rem] border border-[#F3CF7A]/20">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as Category | 'All')}
                  className={`px-12 py-4 rounded-[1.5rem] text-[11px] font-extrabold tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden group ${
                    activeCategory === cat 
                    ? 'bg-[#AA2B1D] text-[#F3CF7A] shadow-xl' 
                    : 'bg-transparent text-[#AA2B1D]/60 hover:text-[#AA2B1D]'
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeCategory === cat && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* Legacy Section */}
        <section className="bg-[#AA2B1D] text-white py-36 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F3CF7A] rounded-full -mr-48 -mt-48 blur-[150px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#CC561E] rounded-full -ml-48 -mb-48 blur-[150px] opacity-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <Sparkles className="text-[#F3CF7A] mb-10 w-12 h-12" />
              <h2 className="text-7xl font-bold mb-8 leading-[1] tracking-tighter uppercase">The Craft Of <br /> <span className="text-[#F3CF7A]">Heritage</span></h2>
              <p className="text-[#FFFAEC] text-xl mb-12 leading-relaxed font-light opacity-80">
                A century-old legacy of artisanal mithai making, using recipes passed down through 
                generations and the finest ingredients from across the Indian subcontinent.
              </p>
              <div className="grid grid-cols-2 gap-16 border-l border-[#F3CF7A] pl-10">
                <div>
                   <div className="text-5xl font-bold text-[#F3CF7A] mb-2">1924</div>
                   <div className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Established</div>
                </div>
                <div>
                   <div className="text-5xl font-bold text-[#F3CF7A] mb-2">100+</div>
                   <div className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Secret Recipes</div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 border border-[#F3CF7A] rounded-[4rem] translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=800" 
                className="relative z-10 rounded-[4.5rem] shadow-2xl transition-all duration-1000 saturate-[0.7] group-hover:saturate-100" 
                alt="Heritage Mithai" 
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-36 bg-[#FFFAEC] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
             <div className="inline-block px-8 py-2 bg-[#8A8635] text-white text-[10px] font-bold tracking-[0.6em] mb-10 rounded-full uppercase">
               Elegance Reimagined
             </div>
            <h2 className="text-7xl font-bold text-[#AA2B1D] mb-10 uppercase tracking-tighter">Luxury <span className="text-[#CC561E]">Gifting</span></h2>
            <p className="text-gray-600 mb-16 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Unveil our curated selection of premium gift boxes, designed to make your celebrations truly extraordinary.
            </p>
            <button className="bg-[#AA2B1D] text-[#F3CF7A] px-20 py-6 rounded-3xl font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#CC561E] hover:text-white transition-all shadow-2xl">
              Explore Our Boxes <ArrowRight className="inline-block ml-4 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#AA2B1D] pt-32 pb-16 px-4 border-t border-[#F3CF7A]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 pb-24 border-b border-[#FFFAEC]">
          <div className="flex flex-col items-start">
            <div className="bg-[#AA2B1D] text-[#F3CF7A] px-8 py-4 flex flex-col items-center mb-10 rounded-xl shadow-md">
                <div className="text-xs font-black tracking-[0.1em] uppercase leading-none border-b border-[#F3CF7A]/20 pb-1 mb-1">BHARAT SWEETS</div>
                <div className="text-[6px] font-bold tracking-[0.6em] uppercase opacity-80 w-full text-center pl-[0.6em]">ORIGINALS</div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-medium italic">
              "Celebrating the vibrant essence of India through artisanal sweets that define perfection."
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-[0.5em] uppercase mb-12 text-[#CC561E]">Heritage</h4>
            <ul className="space-y-5 text-xs font-semibold text-gray-400">
              <li><a href="#" className="hover:text-[#AA2B1D] transition-colors">Our Legacy</a></li>
              <li><a href="#" className="hover:text-[#AA2B1D] transition-colors">Sustainable Sourcing</a></li>
              <li><a href="#" className="hover:text-[#AA2B1D] transition-colors">Artisanship</a></li>
              <li><a href="#" className="hover:text-[#AA2B1D] transition-colors">Media Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-[0.5em] uppercase mb-12 text-[#CC561E]">Support</h4>
            <ul className="space-y-5 text-xs font-semibold text-gray-400">
              <li>Store Locator</li>
              <li>Bulk Enquiries</li>
              <li>Delivery Policy</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs tracking-[0.5em] uppercase mb-12 text-[#CC561E]">Privilege Club</h4>
            <div className="flex border-b border-[#F3CF7A] pb-4 group">
              <input type="email" placeholder="Email Address" className="bg-transparent text-xs flex-grow outline-none py-1 group-focus-within:text-[#AA2B1D]" />
              <button className="text-[#CC561E] font-bold text-[10px] tracking-[0.3em] uppercase hover:text-[#AA2B1D]">JOIN</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] text-gray-300 font-bold">
          <span>© 2024 BHARAT SWEETS : ORIGINALS. ALL RIGHTS RESERVED.</span>
          <div className="mt-8 md:mt-0 flex gap-10">
            <span className="hover:text-[#AA2B1D] cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-[#AA2B1D] cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-[#AA2B1D] cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </footer>

      <SweetAssistant />
    </div>
  );
};

export default App;
