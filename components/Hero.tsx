import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 min-h-screen flex flex-col justify-center bg-aura-950 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Tag */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
           <div className="h-[1px] w-12 bg-white/30"></div>
           <span className="text-sm font-mono tracking-widest uppercase text-slate-400">Осн. 2009 — Глобальный Партнер</span>
        </div>

        {/* Massive Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] font-bold leading-[0.9] tracking-tighter text-white mb-12 mix-blend-difference">
          МЫ СТРОИМ <br />
          <span className="text-aura-accent">ЦИФРОВЫЕ ИМПЕРИИ</span> <br />
          А НЕ ПРОСТО САЙТЫ.
        </h1>

        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
              Мы сочетаем сложную инженерию с премиальной эстетикой, создавая продукты, которые <span className="text-white font-medium">продают</span>, <span className="text-white font-medium">масштабируются</span> и <span className="text-white font-medium">доминируют</span> в вашей нише.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="!bg-white !text-black hover:!bg-slate-200 !px-8 !py-4 text-lg !rounded-none"
              >
                Обсудить Проект
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})} 
                className="!px-8 !py-4 text-lg !rounded-none !border-white/20 hover:!bg-white hover:!text-black"
              >
                Наши Работы
              </Button>
            </div>
          </div>

          <div className="md:col-span-7 flex justify-end">
             {/* Abstract Metric */}
             <div className="hidden md:flex gap-12">
                <div>
                   <div className="text-5xl font-bold font-mono">15+</div>
                   <div className="text-sm text-slate-500 uppercase mt-2 tracking-widest">Лет Опыта</div>
                </div>
                <div>
                   <div className="text-5xl font-bold font-mono">300+</div>
                   <div className="text-sm text-slate-500 uppercase mt-2 tracking-widest">Проектов Сдано</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
         <span className="text-[10px] uppercase tracking-widest">Скролл</span>
         <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};