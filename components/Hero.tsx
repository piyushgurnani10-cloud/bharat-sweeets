
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#FFFAEC] px-4 py-4">
      <div className="max-w-[1400px] mx-auto relative rounded-[3rem] overflow-hidden h-[600px] bg-[#8A8635]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F3CF7A] rounded-full -mr-48 -mt-48 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CC561E] rounded-full -ml-32 -mb-32 opacity-15 blur-3xl"></div>

        {/* Background Image Area */}
        <div className="absolute inset-0 flex justify-end items-center pr-10">
           <img 
            src="https://images.unsplash.com/photo-1589119908995-c6837fa14848?auto=format&fit=crop&q=80&w=1200" 
            alt="Mithai Collection" 
            className="h-[85%] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform -rotate-1"
          />
        </div>

        {/* Text Content */}
        <div className="relative h-full flex flex-col justify-center px-12 md:px-24 z-10 text-white">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-4 uppercase">
            SWEETS <br /> <span className="text-[#F3CF7A]">& SAVOURIES</span>
          </h1>
          <p className="text-xl md:text-2xl font-light italic mb-10 opacity-95 text-[#FFFAEC]">
            For Every Reason and Season
          </p>
          <button className="w-fit bg-[#AA2B1D] text-[#F3CF7A] px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#CC561E] hover:text-white hover:scale-105 transition-all shadow-2xl">
            Enquire Now
          </button>
        </div>
      </div>

      {/* Signature Pattern Divider - Palette Themed */}
      <div className="flex justify-center mt-12 gap-1 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div key={i} className={`flex-shrink-0 flex flex-col gap-1 ${i % 2 === 0 ? '' : 'mt-8'}`}>
            <div className="w-10 h-10 bg-[#AA2B1D] flex items-center justify-center relative transform transition-all hover:scale-110">
               <div className="absolute w-6 h-6 border border-[#F3CF7A]/20 rotate-45"></div>
               <span className="text-[#F3CF7A] text-xs z-10">✦</span>
            </div>
            <div className="w-10 h-10 bg-[#CC561E] flex items-center justify-center relative transform transition-all hover:scale-110">
               <div className="absolute w-6 h-6 border border-[#AA2B1D]/20 rotate-45"></div>
               <span className="text-[#AA2B1D] text-xs z-10">✦</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
