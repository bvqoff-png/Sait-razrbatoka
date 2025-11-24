import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "FinTrack Global",
    subtitle: "FinTech Платформа",
    year: "2024",
    description: "Дэшборд для высокочастотного трейдинга, обрабатывающий миллионы строк данных в реальном времени. Мы снизили задержку (latency) на 40% и улучшили удержание пользователей благодаря мгновенной визуализации данных.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2560&auto=format&fit=crop",
    tags: ["React", "Node.js", "WebSockets"]
  },
  {
    title: "Neon Market",
    subtitle: "Web3 E-Commerce",
    year: "2023",
    description: "NFT маркетплейс нового поколения с транзакциями без газа (zero-gas) и 3D-превью. Построен на Solana, обработал более $10M объема транзакций в первый месяц запуска.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2560&auto=format&fit=crop",
    tags: ["Solana", "Next.js", "WebGL"]
  },
  {
    title: "Luxe Estate",
    subtitle: "Агрегатор Недвижимости",
    year: "2023",
    description: "Иммерсивный портал для элитной недвижимости. Включает 360-градусные туры, AI-модели оценки стоимости и закрытые каналы для брокеров.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2560&auto=format&fit=crop",
    tags: ["Vue.js", "Python", "Matterport API"]
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-aura-950 py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-24 tracking-tighter">
          ИЗБРАННЫЕ <span className="text-slate-700">ПРОЕКТЫ</span>
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="sticky top-20 bg-aura-950/95 backdrop-blur-sm pt-10 border-t border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start pb-20">
                
                {/* Content Side */}
                <div className="order-2 lg:order-1 pt-4">
                  <div className="flex items-center gap-4 text-aura-accent font-mono mb-6">
                    <span>0{index + 1}</span>
                    <span className="h-[1px] w-12 bg-aura-accent"></span>
                    <span>{project.subtitle}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-sm text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="group flex items-center gap-3 text-white text-lg font-medium border-b border-white/30 pb-1 hover:border-white transition-all">
                    Смотреть Кейс
                    <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Image Side */}
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
            <button className="px-12 py-6 border border-white/20 text-xl font-medium text-white hover:bg-white hover:text-black transition-all">
                Все Проекты (42)
            </button>
        </div>
      </div>
    </section>
  );
};