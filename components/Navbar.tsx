
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { label: 'Sanctum', view: AppView.HOME },
    { label: 'Oracle', view: AppView.MIRACLE },
    { label: 'Visions', view: AppView.IMAGE },
    { label: 'Ascension (Deploy)', view: AppView.DEPLOY },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onViewChange(AppView.HOME)}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-400 flex items-center justify-center miracle-glow group-hover:scale-110 transition-transform">
            <span className="text-white text-xs font-bold font-cinzel">M</span>
          </div>
          <span className="font-cinzel text-xl font-bold tracking-wider text-slate-100 hidden sm:block">MIRACLE AI</span>
        </div>
        
        <div className="flex gap-1 sm:gap-4">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => onViewChange(item.view)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                currentView === item.view
                  ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
