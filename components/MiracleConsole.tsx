
import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/gemini';
import { MiracleResult } from '../types';

const MiracleConsole: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [results, setResults] = useState<MiracleResult[]>([]);
  const [isSummoning, setIsSummoning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [results, isSummoning]);

  const handleSummon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isSummoning) return;

    const userPrompt = prompt;
    setPrompt('');
    setIsSummoning(true);

    const service = GeminiService.getInstance();
    const resultText = await service.performMiracle(userPrompt);

    setResults(prev => [...prev, { text: resultText, timestamp: new Date() }]);
    setIsSummoning(false);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-12rem)]">
      <div className="mb-6">
        <h2 className="text-3xl font-cinzel font-bold text-white mb-2">The Oracle</h2>
        <p className="text-slate-400">Pose your inquiry and receive divine clarity.</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto mb-6 space-y-6 pr-4 custom-scrollbar"
      >
        {results.length === 0 && !isSummoning && (
          <div className="flex flex-col items-center justify-center h-full text-slate-600 opacity-50 space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m4.93 19.07 14.14-14.14"/></svg>
            <p className="italic">Silence awaits your command...</p>
          </div>
        )}

        {results.map((res, i) => (
          <div key={i} className="animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 text-slate-200 leading-relaxed shadow-xl">
               <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-violet-600/20 text-violet-400 flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                  </div>
                  <div className="whitespace-pre-wrap">{res.text}</div>
               </div>
            </div>
            <div className="mt-2 text-[10px] text-slate-600 px-4 uppercase tracking-widest font-bold">
              Oracle Manifestation • {res.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}

        {isSummoning && (
          <div className="flex items-center gap-3 text-violet-400 animate-pulse px-4">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.4s]"></div>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase">Consulting the deep...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSummon} className="relative">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your inquiry here..."
          className="w-full bg-slate-900 border border-white/10 rounded-2xl py-5 px-6 pr-32 focus:outline-none focus:ring-2 focus:ring-violet-600/50 text-slate-200 placeholder:text-slate-600 shadow-2xl transition-all"
        />
        <button
          type="submit"
          disabled={!prompt.trim() || isSummoning}
          className="absolute right-3 top-2 bottom-2 px-6 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all flex items-center gap-2 group"
        >
          <span className="hidden sm:inline">Summon</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </form>
    </div>
  );
};

export default MiracleConsole;
