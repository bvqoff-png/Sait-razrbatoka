import React, { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';

const services = [
  { 
    id: '01', 
    title: 'Веб-разработка', 
    desc: 'Масштабируемые решения.',
    details: [
      'Стек: React, Next.js, TypeScript',
      'SSR для максимальной скорости (SEO)',
      'Интеграция с 1С, CRM и ERP системами',
      'Безопасность уровня Enterprise'
    ]
  },
  { 
    id: '02', 
    title: 'Мобильные приложения', 
    desc: 'iOS и Android.',
    details: [
      'Единая кодовая база (React Native)',
      'Публикация в App Store и Google Play',
      'Работа в оффлайн-режиме',
      'Нативная производительность 60 FPS'
    ]
  },
  { 
    id: '03', 
    title: 'UI/UX Дизайн', 
    desc: 'Интерфейсы, которые продают.',
    details: [
      'Глубокий анализ конкурентов (CJM)',
      'Интерактивные прототипы в Figma',
      'Дизайн-системы для масштабирования',
      '3D-графика и Motion-дизайн'
    ]
  },
  { 
    id: '04', 
    title: 'AI Интеграция', 
    desc: 'Автоматизация бизнеса.',
    details: [
      'Чат-боты на базе GPT-4 и Gemini',
      'Анализ больших данных (Big Data)',
      'Авто-генерация контента',
      'Голосовые ассистенты'
    ]
  },
  { 
    id: '05', 
    title: 'SEO и Скорость', 
    desc: 'Топ выдачи Google.',
    details: [
      'Google PageSpeed: 95-100 баллов',
      'Техническая оптимизация кода',
      'Семантическое ядро и структура',
      'Микроразметка Schema.org'
    ]
  }
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="py-32 bg-aura-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
             <h2 className="text-5xl font-bold text-white mb-6">НАША ЭКСПЕРТИЗА</h2>
          </div>
          <div className="lg:col-span-7">
             <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
               Мы создаем цифровые продукты полного цикла. От идеи до первого миллиона пользователей. Выберите направление, чтобы узнать технические детали.
             </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {services.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <div 
                key={service.id} 
                className={`group border-b border-white/10 transition-all duration-500 cursor-pointer ${isActive ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
                onClick={() => toggleService(service.id)}
              >
                <div className="py-12 px-4 md:px-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6 md:gap-16">
                      <span className={`font-mono text-xl transition-colors duration-300 ${isActive ? 'text-aura-accent' : 'text-slate-600'}`}>
                        {service.id}
                      </span>
                      <h3 className={`text-3xl md:text-5xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto mt-4 md:mt-0">
                       <span className={`text-sm text-slate-500 hidden md:block transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                         {service.desc}
                       </span>
                       <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-aura-accent border-aura-accent rotate-135' : 'border-white/20 group-hover:border-white'}`}>
                         <Plus className={`transition-colors duration-300 ${isActive ? 'text-black' : 'text-white'}`} />
                       </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out ${isActive ? 'grid-rows-[1fr] mt-8' : ''}`}>
                    <div className="overflow-hidden">
                      <div className="flex flex-col md:flex-row gap-8 md:pl-[6.5rem]"> {/* Indent to align with title */}
                        <div className="w-full h-[1px] bg-white/10 md:hidden"></div>
                        
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 w-full">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-slate-300">
                              <ArrowRight size={16} className="text-aura-accent flex-shrink-0" />
                              <span className="text-lg">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};