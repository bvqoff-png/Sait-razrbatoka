import React from 'react';
import { Plus } from 'lucide-react';

const services = [
  { id: '01', title: 'Веб-разработка', desc: 'Enterprise-решения на React и Node.js, созданные для высоких нагрузок.' },
  { id: '02', title: 'Мобильные приложения', desc: 'Нативные iOS и Android приложения на базе React Native.' },
  { id: '03', title: 'UI/UX Дизайн', desc: 'Интерфейсы мирового уровня, повышающие конверсию и удержание пользователей.' },
  { id: '04', title: 'AI Интеграция', desc: 'Внедрение LLM моделей и автоматизация бизнес-процессов компании.' },
  { id: '05', title: 'SEO и Скорость', desc: 'Техническое SEO и оптимизация Core Web Vitals для максимальной видимости.' }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-aura-900 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
             <h2 className="text-5xl font-bold text-white mb-6">НАША ЭКСПЕРТИЗА</h2>
          </div>
          <div className="lg:col-span-7">
             <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
               Мы не работаем с шаблонами. Мы создаем индивидуальные цифровые решения для сложных бизнес-задач. Наш стек современен, код чист, а результаты измеримы в деньгах.
             </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          {services.map((service) => (
            <div key={service.id} className="group border-b border-white/10 py-12 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start md:items-center gap-8 md:gap-16">
                  <span className="text-slate-500 font-mono text-xl">{service.id}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-slate-300 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                   <p className="text-slate-500 max-w-xs text-sm hidden md:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                     {service.desc}
                   </p>
                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-aura-accent group-hover:border-aura-accent transition-all">
                     <Plus className="text-white group-hover:rotate-90 transition-transform duration-300" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};