import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
         <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Нам доверяют лидеры</h2>
         
         <div className="grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <div key={i} className="bg-slate-800/30 p-8 rounded-2xl border border-white/5">
               <div className="flex gap-1 text-yellow-500 mb-6">
                 {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
               </div>
               <p className="text-slate-300 italic mb-6">"Aura Digital трансформировали нашу устаревшую платформу в современное, сверхбыстрое приложение. Их внимание к деталям не имеет аналогов в индустрии."</p>
               <div className="flex items-center gap-4">
                 <img src={`https://picsum.photos/50/50?random=${i+10}`} alt="User" className="w-12 h-12 rounded-full border border-slate-600" />
                 <div>
                   <div className="text-white font-bold">Алексей Стерлинг</div>
                   <div className="text-xs text-slate-500">CTO, FinTech Solutions</div>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};