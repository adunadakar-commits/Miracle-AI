
import React from 'react';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 py-20 max-w-4xl mx-auto">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h2 className="text-violet-400 font-medium tracking-[0.3em] uppercase text-sm">Welcome to the Sanctum</h2>
        <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-white leading-tight">
          Where Intelligence <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
            Meets the Miraculous
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Unlock the true potential of your ideas. Powered by Gemini, Miracle AI transforms your queries into 
          wisdom and your imagination into vivid digital realities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-violet-500/30 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <h3 className="text-xl font-cinzel font-bold mb-3">Miraculous Logic</h3>
          <p className="text-slate-500 text-sm">Solve complex equations, debug code, or refine deep philosophical questions instantly.</p>
        </div>
        
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-indigo-500/30 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/><path d="m16.24 7.76-8.48 8.48"/><path d="m7.76 7.76 8.48 8.48"/></svg>
          </div>
          <h3 className="text-xl font-cinzel font-bold mb-3">Visual Apparition</h3>
          <p className="text-slate-500 text-sm">Manifest high-fidelity imagery from mere descriptions using advanced generative models.</p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all group">
          <div className="w-12 h-12 rounded-xl bg-cyan-600/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
          </div>
          <h3 className="text-xl font-cinzel font-bold mb-3">Cloud Ascension</h3>
          <p className="text-slate-500 text-sm">Optimized for deployment at miracle.senegal-telecom.com with enterprise-grade stability.</p>
        </div>
      </div>

      <button
        onClick={onGetStarted}
        className="px-12 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 miracle-glow font-cinzel tracking-widest"
      >
        Summon the Oracle
      </button>
    </div>
  );
};

export default Home;
