import React from 'react';

export const Ticker: React.FC = () => {
  const words = [
    "ВЕБ-РАЗРАБОТКА", "МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ", "UI/UX ДИЗАЙН", 
    "E-COMMERCE", "AI ИНТЕГРАЦИЯ", "БРЕНДИНГ", 
    "СТРАТЕГИЯ", "SEO ОПТИМИЗАЦИЯ"
  ];

  return (
    <div className="py-8 bg-aura-accent border-y border-black overflow-hidden relative z-20 rotate-1 scale-105 transform origin-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 mx-6">
            {words.map((word, idx) => (
              <span key={idx} className="text-4xl font-bold text-black tracking-tight flex items-center gap-12">
                {word}
                <span className="w-3 h-3 bg-black rounded-full"></span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};