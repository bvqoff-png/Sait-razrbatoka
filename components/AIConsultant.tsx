import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Loader2, Sparkles, Command } from 'lucide-react';
import { sendMessageToConsultant, ChatMessage } from '../services/geminiService';

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Система Aura v2.1 в сети. \nГотов к анализу параметров проекта. Опишите ваши требования." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToConsultant(messages, userMsg.text);

    const modelMsg: ChatMessage = { role: 'model', text: responseText };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="consultant" className="py-24 bg-aura-950 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
       
       <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Sales Copy */}
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Command size={14} />
              <span>Протокол Оценки Проекта</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Мгновенная Оценка <br/> 
              <span className="text-indigo-400">Задач (Scope).</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Забудьте о долгих переписках. Обсудите задачу с нашим AI-архитектором. 
              Он понимает технологии, сложность и затраты. Получите предварительную оценку и структуру проекта за минуты, а не дни.
            </p>
            
            <div className="flex gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                API CONNECTED
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                LATENCY: 24ms
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Interface */}
          <div className="relative">
            {/* Glassmorphism Container */}
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[500px] md:h-[600px] relative font-mono text-sm">
                
                {/* Terminal Header */}
                <div className="bg-slate-950 p-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-indigo-400" />
                    <span className="text-slate-400 text-xs">root@aura-systems:~</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <span className="text-[10px] text-slate-600 mb-1 uppercase tracking-wider">
                        {msg.role === 'user' ? 'ВВОД_ПОЛЬЗОВАТЕЛЯ' : 'ОТВЕТ_СИСТЕМЫ'}
                      </span>
                      <div className={`max-w-[85%] p-3 rounded-md border ${
                        msg.role === 'user' 
                          ? 'bg-indigo-900/20 border-indigo-500/30 text-indigo-100' 
                          : 'bg-slate-800/50 border-slate-700 text-slate-300 whitespace-pre-line'
                      }`}>
                         {msg.role === 'model' && <span className="text-indigo-400 mr-2">{'>'}</span>}
                         {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-start">
                        <div className="bg-slate-800/50 border border-slate-700 p-3 rounded-md flex items-center gap-2 text-indigo-400">
                          <Loader2 className="animate-spin" size={14} />
                          <span className="animate-pulse">Обработка логики...</span>
                        </div>
                     </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-slate-950 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 blink">$</span>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Введите команду или вопрос..."
                      className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 font-mono text-sm h-10"
                      autoComplete="off"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={isLoading || !inputValue.trim()}
                      className="text-indigo-400 hover:text-white disabled:opacity-30 transition-colors"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none opacity-20 bg-[length:100%_4px]" />
            </div>

            {/* Decorative "Behind" Glow */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl -z-10 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};