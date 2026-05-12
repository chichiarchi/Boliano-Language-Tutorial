import { useState, useEffect } from 'react';
import PhraseCard from '../components/PhraseCard';
import InteractiveQuiz from '../components/InteractiveQuiz';
import languageData from '../data/languageData.json';
import { Award } from 'lucide-react';

const Learn = () => {
  const [progress, setProgress] = useState({ score: 0, total: 0 });
  const dailyPhrase = languageData[0]; // Simplified for now

  useEffect(() => {
    const saved = localStorage.getItem('bolinao_progress');
    if (saved) setProgress(JSON.parse(saved));

    // Listen for storage changes (quiz updates)
    const handleStorage = () => {
      const updated = localStorage.getItem('bolinao_progress');
      if (updated) setProgress(JSON.parse(updated));
    };
    window.addEventListener('storage', handleStorage);
    // Poll for updates within the same window (since storage event doesn't fire on same window)
    const interval = setInterval(handleStorage, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  const percentage = progress.total > 0 ? Math.round((progress.score / progress.total) * 100) : 0;

  return (
    <div className="space-y-16">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-bold text-sea-blue">Learning Studio</h1>
          <p className="text-sea-blue/60">Practice your Bolinao skills with interactive modules.</p>
        </div>
        
        <div className="bg-white p-4 rounded-3xl border border-sea-blue/10 flex items-center gap-6 shadow-sm">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="stroke-sea-blue/5 fill-none"
                strokeWidth="3"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="stroke-coral fill-none"
                strokeWidth="3"
                strokeDasharray={`${percentage}, 100`}
                strokeLinecap="round"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="text-xs font-bold text-sea-blue">{percentage}%</span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-sea-blue/40">Accuracy</p>
            <p className="font-bold text-sea-blue leading-none">{progress.score} / {progress.total}</p>
            <div className="flex gap-1 mt-1">
               {[...Array(5)].map((_, i) => (
                 <Award key={i} size={12} className={i < Math.floor(progress.score / 5) ? 'text-coral' : 'text-sea-blue/10'} />
               ))}
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-sea-blue flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-coral text-white flex items-center justify-center text-sm">01</span>
            Daily Phrase Study
          </h3>
          <PhraseCard data={dailyPhrase} />
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-bold text-sea-blue flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-ocean-teal text-white flex items-center justify-center text-sm">02</span>
            Quick Quiz
          </h3>
          <InteractiveQuiz />
        </div>
      </div>
    </div>
  );
};

export default Learn;
