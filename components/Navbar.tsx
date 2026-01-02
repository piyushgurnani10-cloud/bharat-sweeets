
import React from 'react';
import { Search, Heart, ShoppingBag, ChevronDown } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav className="bg-[#FFFAEC] border-b border-[#F3CF7A]/30 z-50">
      {/* Top Banner Accent - Using Burnt Orange */}
      <div className="h-1 bg-[#CC561E] w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center pt-6 pb-4">
          
          {/* Main Nav Container */}
          <div className="w-full flex justify-between items-center">
            
            {/* Left Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavItem name="SHOP NOW" hasDropdown />
              <NavItem name="GIFTING" hasDropdown />
              <NavItem name="STORE LOCATIONS" />
            </div>

            {/* Logo Central - Refined Focus */}
            <div className="flex flex-col items-center mx-8">
              <div className="text-[#CC561E] text-[7px] tracking-[0.4em] mb-1.5 opacity-60 uppercase font-bold">The Heritage of India</div>
              <div className="bg-[#AA2B1D] text-[#F3CF7A] px-10 py-4 flex flex-col items-center shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="text-xl font-[900] tracking-[0.1em] uppercase leading-none border-b-2 border-[#F3CF7A]/20 pb-1 mb-1">
                  BHARAT SWEETS
                </div>
                <div className="text-[7px] font-bold tracking-[0.8em] uppercase opacity-75 w-full text-center pl-[0.8em]">
                  ORIGINALS
                </div>
              </div>
              <div className="text-[#CC561E] text-[7px] tracking-[0.5em] mt-1.5 opacity-60 uppercase font-bold">Authentic Since 1924</div>
            </div>

            {/* Right Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavItem name="ABOUT US" />
              <NavItem name="CONTACT US" />
              
              <div className="flex items-center space-x-4 pl-4 border-l border-[#F3CF7A]/50">
                <button className="text-[#AA2B1D] hover:text-[#CC561E] transition-colors"><Search className="w-4 h-4" /></button>
                <button className="text-[#AA2B1D] hover:text-[#CC561E] transition-colors"><Heart className="w-4 h-4" /></button>
                <button className="relative text-[#AA2B1D] hover:text-[#CC561E] transition-colors">
                  <ShoppingBag className="w-4 h-4" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#CC561E] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ name: string; hasDropdown?: boolean }> = ({ name, hasDropdown }) => (
  <a href="#" className="text-[10px] font-extrabold text-[#AA2B1D] hover:text-[#CC561E] tracking-[0.15em] flex items-center transition-colors">
    {name}
    {hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
  </a>
);

export default Navbar;
