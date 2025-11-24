import React from 'react';

const steps = [
  { num: '01', title: 'Аналитика и Стратегия', desc: 'Глубоко погружаемся в вашу бизнес-логику, изучаем конкурентов и формируем выигрышную стратегию развития.' },
  { num: '02', title: 'Архитектура и Дизайн', desc: 'Проектируем Hi-Fi прототипы и масштабируемую схему базы данных до того, как написать первую строчку кода.' },
  { num: '03', title: 'Agile Разработка', desc: 'Двухнедельные спринты с прозрачными демо-показами. Вы видите, как продукт эволюционирует в реальном времени.' },
  { num: '04', title: 'Контроль Качества (QA)', desc: 'Строгое автоматизированное тестирование, аудит безопасности и нагрузочное тестирование перед запуском.' },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-slate-900 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Как мы работаем</h2>
          <p className="text-slate-400 max-w-2xl">Прозрачность — наша валюта. Никаких "черных ящиков", только понятные инженерные процессы.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
              )}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-800 border border-indigo-500/30 flex items-center justify-center text-xl font-bold text-indigo-400 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};