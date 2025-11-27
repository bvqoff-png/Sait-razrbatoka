import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Проверяем, что это мобильное устройство (ширина меньше 768px)
        // Если это десктоп, оставляем только hover-эффект
        if (window.innerWidth < 768) {
          setIsInView(entry.isIntersecting);
        }
      },
      { threshold: 0.5 } // Срабатывает, когда элемент виден на 50%
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Massive CTA */}
        <div className="mb-32">
          <p className="text-slate-400 mb-6 uppercase tracking-widest text-sm">Есть идея?</p>
          <a 
            ref={ctaRef}
            href="https://t.me/bakdauletnm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block"
            aria-label="Написать в Telegram"
          >
            <h2 className="text-[12vw] font-bold leading-none text-white transition-colors duration-500 hover:text-aura-accent flex items-center gap-4 md:gap-8">
              ДАВАЙТЕ ОБСУДИМ 
              <div className="relative w-[10vw] h-[10vw] overflow-hidden">
                 <ArrowUpRight 
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 
                      ${isInView ? '-translate-y-full translate-x-full' : ''} 
                      group-hover:-translate-y-full group-hover:translate-x-full`} 
                 />
                 <Send 
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 text-aura-accent translate-y-full -translate-x-full
                      ${isInView ? 'translate-x-0 translate-y-0' : ''}
                      group-hover:translate-x-0 group-hover:translate-y-0`} 
                 />
              </div>
            </h2>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Aura Digital Systems.</h3>
            <p className="text-slate-500 max-w-md">
              Премиальная веб-студия, специализирующаяся на высоконагруженной разработке и AI-интеграциях для передовых компаний.
            </p>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6">Карта сайта</h4>
             <ul className="space-y-4 text-slate-400">
               <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
               <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
               <li><a href="#portfolio" className="hover:text-white transition-colors">Проекты</a></li>
               <li><a href="#consultant" className="hover:text-white transition-colors">AI Консультант</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6">Соцсети</h4>
             <ul className="space-y-4 text-slate-400">
               <li><a href="https://t.me/bakdauletnm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
             </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
           <p>© {new Date().getFullYear()} Aura Digital Systems.</p>
           <div className="flex gap-8 mt-4 md:mt-0">
             <span>Политика Конфиденциальности</span>
             <span>Условия Использования</span>
           </div>
        </div>
      </div>
    </footer>
  );
};