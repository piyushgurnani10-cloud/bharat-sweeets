
import React, { useState } from 'react';
import { Sparkles, Send, Bot, X } from 'lucide-react';
import { getSweetRecommendations } from '../services/geminiService';

const SweetAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Namaste! I am your Mithai Sommelier. Looking for a special treat or a perfect gift? Ask me anything!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getSweetRecommendations(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: response || 'I am sorry, I am having trouble thinking right now.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Pardon me, I encountered a technical hitch. Let me try to find that for you again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button - Red and Mustard */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 bg-[#AA2B1D] text-[#F3CF7A] p-6 rounded-3xl shadow-2xl hover:scale-110 transition-all z-40 flex items-center gap-4 group border border-[#F3CF7A]/30"
      >
        <Sparkles className="w-7 h-7 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-xs uppercase tracking-[0.2em]">
          Mithai Sommelier
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-10 w-[400px] md:w-[440px] h-[600px] bg-white rounded-[3rem] shadow-[0_50px_120px_rgba(170,43,29,0.3)] z-50 flex flex-col border border-[#F3CF7A]/30 animate-in slide-in-from-bottom-12 duration-500 overflow-hidden">
          <div className="p-8 bg-[#AA2B1D] text-white flex justify-between items-center relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#CC561E] rounded-full -mr-20 -mt-20 opacity-10 blur-3xl"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-[#F3CF7A] p-2.5 rounded-2xl">
                <Bot className="w-6 h-6 text-[#AA2B1D]" />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight">Mithai Sommelier</h3>
                <p className="text-[10px] text-[#F3CF7A] font-bold uppercase tracking-[0.3em] opacity-80">Heritage Expert</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2.5 rounded-xl hover:bg-white/20 transition-colors relative z-10">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-[#FFFAEC]/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-[13px] font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-[#AA2B1D] text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 rounded-tl-none border border-[#F3CF7A]/20'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#F3CF7A]/20 p-5 rounded-3xl rounded-tl-none flex gap-2 items-center">
                  <div className="w-2 h-2 bg-[#AA2B1D] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#CC561E] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#F3CF7A] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-[#F3CF7A]/20 bg-white flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="What can I suggest for you?"
              className="flex-grow bg-[#FFFAEC] border border-[#F3CF7A]/20 rounded-2xl px-6 py-4 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#AA2B1D]/30 focus:border-[#AA2B1D] transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#AA2B1D] text-[#F3CF7A] p-4 rounded-2xl hover:scale-105 disabled:opacity-50 transition-all shadow-xl"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SweetAssistant;
