import * as Icons from 'lucide-react';

export default function MockupFrame({ type, title, children }) {
  const isMobile = type === 'Mobile-App';
  const isBackend = type === 'Backend / API RESTful';
  const isWeb = !isMobile && !isBackend;

  if (isWeb) {
    return (
      <div className="w-[90%] md:w-[95%] mt-8 bg-mockup-bg rounded-t-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] z-20 border border-white/10 border-b-0">
        <div className="bg-mockup-header px-3 py-2 flex items-center gap-1.5 border-b border-white/5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
          <div className="mx-auto flex items-center gap-1 bg-black/40 px-3 py-0.5 rounded text-[10px] text-gray-400">
             <Icons.Lock size={8} /> {title}.app
          </div>
        </div>
        <div className="bg-mockup-bg w-full flex-1 relative overflow-hidden">
          {children}
        </div>
      </div>
    );
  }
  
  if (isMobile) {
    return (
      <div className="h-[92%] aspect-[9/19.5] mt-6 bg-mockup-bg rounded-[28px] p-[6px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/20 relative transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] z-20">
        <div className="bg-black rounded-[18px] w-full h-full overflow-hidden relative border border-white/10">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-20"></div>
          {children}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/40 rounded-full z-10"></div>
        </div>
      </div>
    );
  }

  if (isBackend) {
    return (
      <div className="w-[90%] md:w-[95%] mt-8 bg-mockup-bg rounded-t-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-white/10 border-b-0 transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] z-20">
        <div className="bg-mockup-header px-3 py-2 flex items-center gap-1.5 border-b border-white/5 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
          </div>
          <div className="flex-1 text-center text-[11px] text-gray-400 mr-8 font-mono">
            security.py
          </div>
        </div>
        <div className="bg-mockup-ide w-full p-0 flex-1 relative overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  return children;
}
