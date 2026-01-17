
import React from 'react';

const DeploymentGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-cinzel font-bold text-white mb-4">Project Ascension</h2>
        <p className="text-slate-400">Deploying Miracle AI to <span className="text-violet-400 font-mono">miracle.senegal-telecom.com</span></p>
      </div>

      <div className="space-y-8">
        <section className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 space-y-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-violet-400">
            <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center font-bold">1</div>
            <h3 className="text-2xl font-cinzel font-bold">Build the Manifest</h3>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Generate the production-ready static files. Run the following command in your terminal to create a 
            <code className="text-violet-300 bg-black/40 px-2 py-0.5 rounded ml-1">dist/</code> directory containing everything the web server needs.
          </p>
          <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-violet-200 border border-white/5">
            npm run build
          </div>
        </section>

        <section className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 space-y-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-indigo-400">
            <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center font-bold">2</div>
            <h3 className="text-2xl font-cinzel font-bold">Host Configuration</h3>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Upload the contents of <code className="text-indigo-300 bg-black/40 px-2 py-0.5 rounded">dist/</code> to your server at Senegal Telecom. 
            If you are using Nginx, use this configuration for proper Single Page Application (SPA) routing:
          </p>
          <div className="bg-black/40 rounded-xl p-4 font-mono text-xs text-indigo-200 border border-white/5 overflow-x-auto">
            <pre>{`server {
    listen 80;
    server_name miracle.senegal-telecom.com;
    root /var/www/miracle-ai/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}`}</pre>
          </div>
        </section>

        <section className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 space-y-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-cyan-400">
            <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center font-bold">3</div>
            <h3 className="text-2xl font-cinzel font-bold">Ethereal Secrets</h3>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Ensure the <code className="text-cyan-300 bg-black/40 px-2 py-0.5 rounded">API_KEY</code> environment variable is set in your CI/CD pipeline or deployment environment. 
            Since this app runs in the browser, the build process injects it via process.env.
          </p>
          <ul className="list-disc list-inside text-slate-500 text-sm space-y-2 ml-4">
            <li>GitHub Actions: Add to Repository Secrets</li>
            <li>Netlify/Vercel: Add to Environment Variables UI</li>
            <li>Custom VPS: Add to your .env or server profile</li>
          </ul>
        </section>

        <div className="text-center py-8">
            <div className="inline-block p-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full">
                <a 
                    href="mailto:support@senegal-telecom.com" 
                    className="block px-8 py-3 bg-slate-950 rounded-full text-white font-bold hover:bg-transparent transition-all"
                >
                    Contact Systems Architecture
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuide;
