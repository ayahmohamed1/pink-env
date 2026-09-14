import { clientData } from '../data';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnvelopePage({ onOpen }) {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center py-6 px-4 text-[#5C2438] text-center overflow-hidden">
      
      <h3 className="font-display tracking-[0.2em] text-[13px] uppercase mb-2 relative z-20">OPEN ME</h3>
      
      <div className="flex items-center gap-3 mb-8 w-48 mx-auto opacity-60 relative z-20">
        <div className="h-px flex-1 bg-[#5C2438]"></div>
        <Heart size={12} className="fill-[#5C2438] text-[#5C2438]" />
        <div className="h-px flex-1 bg-[#5C2438]"></div>
      </div>

      <motion.div 
        onClick={onOpen}
        whileHover={{ scale: 1.03, y: -6 }}
        whileTap={{ scale: 0.97 }}
        className="w-[226px] max-w-full mx-auto -mt-[55px] -mb-[24px] cursor-pointer relative z-10"
        title="Click to open"
      >
        <img 
          src={clientData.envelopeImage} 
          alt="Envelope" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      <p className="font-display text-[12px] tracking-[0.15em] uppercase mb-1 opacity-90 relative z-20">A special message for</p>
      <h1 className="font-script text-6xl sm:text-7xl mb-6 leading-tight relative z-20">{clientData.recipientName}</h1>
      
      {/* الخط الفاصل السفلي - شيلنا منه الـ margin-bottom عشان يتوسطن صح في الشاشة */}
      <div className="flex items-center gap-3 w-48 mx-auto opacity-60 relative z-20">
        <div className="h-px flex-1 bg-[#5C2438]"></div>
        <Heart size={12} className="fill-[#5C2438] text-[#5C2438]" />
        <div className="h-px flex-1 bg-[#5C2438]"></div>
      </div>
      
    </div>
  );
}