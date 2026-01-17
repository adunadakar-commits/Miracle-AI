
import React, { useState } from 'react';
import { AppView } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MiracleConsole from './components/MiracleConsole';
import ImageCreation from './components/ImageCreation';
import DeploymentGuide from './components/DeploymentGuide';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home onGetStarted={() => setCurrentView(AppView.MIRACLE)} />;
      case AppView.MIRACLE:
        return <MiracleConsole />;
      case AppView.IMAGE:
        return <ImageCreation />;
      case AppView.DEPLOY:
        return <DeploymentGuide />;
      default:
        return <Home onGetStarted={() => setCurrentView(AppView.MIRACLE)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        {renderView()}
      </main>
      <footer className="py-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2024 Miracle AI - Manifesting Intelligence for miracle.senegal-telecom.com</p>
      </footer>
    </div>
  );
};

export default App;
