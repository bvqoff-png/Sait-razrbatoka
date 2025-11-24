import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { AIConsultant } from './components/AIConsultant';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-aura-950 text-slate-200 font-sans selection:bg-aura-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Portfolio />
        <Process />
        <AIConsultant />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;