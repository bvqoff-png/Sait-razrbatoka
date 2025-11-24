import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Massive CTA */}
        <div className="mb-32">
          <p className="text-slate-400 mb-6 uppercase tracking-widest text-sm">Есть идея?</p>
          <a href="#contact" className="group block">
            <h2 className="text-[12vw] font-bold leading-none text-white transition-colors duration-500 hover:text-aura-accent flex items-center gap-8">
              ДАВАЙТЕ ОБСУДИМ <ArrowUpRight className="w-[10vw] h-[10vw] transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
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
               <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
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