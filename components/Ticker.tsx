import React from 'react';

export const Ticker: React.FC = () => {
  const words = [
    "ВЕБ-РАЗРАБОТКА", "МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ", "UI/UX ДИЗАЙН", 
    "E-COMMERCE", "AI ИНТЕГРАЦИЯ", "БРЕНДИНГ", 
    "СТРАТЕГИЯ", "SEO ОПТИМИЗАЦИЯ"
  ];

  const TickerContent = () => (
    <div className="flex items-center">
      {/* Repeats the word list 4 times to ensure it's longer than any screen */}
      {[...Array(4)].map((_, loopIdx) => (
        <React.Fragment key={loopIdx}>
          {words.map((word, idx) => (
            <span key={`${loopIdx}-${idx}`} className="text-4xl font-bold text-black tracking-tight flex items-center whitespace-nowrap mx-8">
              {word}
              <span className="w-3 h-3 bg-black rounded-full ml-8"></span>
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="py-8 bg-aura-accent border-y border-black overflow-hidden relative z-20 rotate-1 scale-105 transform origin-center">
      <div className="flex w-fit">
        {/* First strip */}
        <div className="flex animate-marquee shrink-0 items-center">
          <TickerContent />
        </div>
        {/* Second strip (duplicate) follows immediately */}
        <div className="flex animate-marquee shrink-0 items-center">
          <TickerContent />
        </div>
      </div>
    </div>
  );
};