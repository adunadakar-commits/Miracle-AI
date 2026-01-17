
import React, { useState } from 'react';
import { GeminiService } from '../services/gemini';
import { GeneratedImage } from '../types';

const ImageCreation: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [gallery, setGallery] = useState<GeneratedImage[]>([]);
  const [isManifesting, setIsManifesting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleManifest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isManifesting) return;

    setError(null);
    setIsManifesting(true);

    try {
      const service = GeminiService.getInstance();
      const imageUrl = await service.manifestImage(prompt);
      
      setGallery(prev => [{ url: imageUrl, prompt, timestamp: new Date() }, ...prev]);
      setPrompt('');
    } catch (err) {
      setError("The ethereal planes are currently unstable. Please try another vision.");
    } finally {
      setIsManifesting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-cinzel font-bold text-white">Visions</h2>
        <p className="text-slate-400">Describe a vision, and watch it manifest before your eyes.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleManifest} className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A surreal landscape of floating golden cathedrals..."
            className="flex-grow bg-slate-900 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 text-slate-200 placeholder:text-slate-600 transition-all"
          />
          <button
            type="submit"
            disabled={!prompt.trim() || isManifesting}
            className="px-8 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all miracle-glow"
          >
            {isManifesting ? 'Manifesting...' : 'Manifest'}
          </button>
        </form>
        {error && <p className="mt-2 text-red-400 text-sm text-center">{error}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isManifesting && (
          <div className="aspect-square rounded-2xl bg-slate-900 border border-white/5 flex flex-col items-center justify-center text-indigo-400 animate-pulse space-y-4">
            <div className="w-12 h-12 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Forging Reality...</span>
          </div>
        )}
        
        {gallery.map((img, i) => (
          <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/5 animate-in zoom-in-95 duration-500">
            <img 
              src={img.url} 
              alt={img.prompt} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white text-sm line-clamp-2 italic">"{img.prompt}"</p>
              <p className="text-slate-400 text-[10px] mt-2 font-bold uppercase tracking-widest">{img.timestamp.toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {gallery.length === 0 && !isManifesting && (
        <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-3xl">
          <p className="text-slate-600 font-cinzel text-xl italic">The gallery is empty. Create your first miracle.</p>
        </div>
      )}
    </div>
  );
};

export default ImageCreation;
