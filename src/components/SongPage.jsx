import { useState, useRef } from 'react';
import PageShell from './PageShell';
import { clientData } from '../data';
import { Heart, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SongPage({ onNext, onBack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <PageShell onNext={onNext} onBack={onBack}>
      <h2 className="font-display text-base sm:text-lg tracking-widest uppercase text-[#5C2438] mb-1 text-center">A SONG FOR YOU</h2>
      
      {/* قللنا المسافة هنا */}
      <div className="flex items-center gap-3 mb-5 w-40 mx-auto opacity-60">
        <div className="h-px flex-1 bg-[#5C2438]"></div>
        <Heart size={10} className="fill-[#5C2438] text-[#5C2438]" />
        <div className="h-px flex-1 bg-[#5C2438]"></div>
      </div>

      {/* صغرنا حجم الدائرة شوية وقللنا المسافة تحتها */}
      <motion.div 
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-44 h-44 sm:w-48 sm:h-48 rounded-full shadow-2xl relative flex items-center justify-center mb-5 border-[3px] border-[#5C2438]/10 mx-auto overflow-hidden"
      >
        <img 
          src={clientData.song.coverArt} 
          alt="cover" 
          className="w-full h-full object-cover" 
        />
      </motion.div>

      <div className="text-center w-full">
        <h3 className="font-display text-xl mb-1 text-[#5C2438]">{clientData.song.title}</h3>
        <p className="text-xs font-body opacity-90 mb-4 flex items-center justify-center gap-2 text-[#5C2438]">
          {clientData.song.artist} <Heart size={10} className="opacity-70" />
        </p>

        {/* شريط الأغنية */}
        <div className="w-full h-1 bg-[#5C2438]/20 rounded-full mb-2 relative">
           <div className="w-1/3 h-full bg-[#5C2438] rounded-full"></div>
        </div>
        <div className="flex justify-between font-body text-[10px] sm:text-xs opacity-80 mb-5 text-[#5C2438]">
          <span>1:20</span>
          <span>3:41</span>
        </div>

        {/* الزراير حجمها بقى أهدى شوية ومسافاتها اتلمت */}
        <div className="flex items-center justify-center gap-5 mb-6">
          <SkipBack size={20} className="fill-[#5C2438] text-[#5C2438] opacity-90 cursor-pointer hover:scale-110 transition-transform" />
          
          <button 
            onClick={togglePlay}
            className="w-12 h-12 bg-[#B43F6E] rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            {isPlaying ? 
              <Pause size={20} className="fill-white text-white" /> : 
              <Play size={20} className="fill-white text-white ml-1" />
            }
          </button>
          
          <SkipForward size={20} className="fill-[#5C2438] text-[#5C2438] opacity-90 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* صغرنا الخط سِنة عشان لو الجملة طويلة متعملش مشكلة */}
        <p className="font-script text-3xl sm:text-4xl text-[#5C2438] leading-tight px-2">{clientData.song.footerQuote}</p>
        <audio ref={audioRef} src={clientData.song.audioSrc} />
      </div>
    </PageShell>
  );
}