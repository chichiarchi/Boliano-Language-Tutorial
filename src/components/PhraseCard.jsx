import { useState } from 'react';
import { Info, BookOpen, ChevronRight } from 'lucide-react';

const PhraseCard = ({ data }) => {
  const [view, setView] = useState('literal'); // 'literal' or 'cultural'

  return (
    <div className="glass-card overflow-hidden group">
      <div className="bg-sea-blue p-6 text-sand-beige relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-coral text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-widest">Phrase of the Day</span>
          <h2 className="text-3xl font-bold mt-2">{data.term}</h2>
          <p className="opacity-70 italic mt-1">{data.ipa_phonetic}</p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
          <BookOpen size={120} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex bg-sand-beige/50 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setView('literal')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${view === 'literal' ? 'bg-white text-sea-blue shadow-sm' : 'text-sea-blue/50 hover:text-sea-blue'}`}
          >
            <ChevronRight size={16} /> Literal
          </button>
          <button 
            onClick={() => setView('cultural')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${view === 'cultural' ? 'bg-white text-sea-blue shadow-sm' : 'text-sea-blue/50 hover:text-sea-blue'}`}
          >
            <Info size={16} /> Cultural
          </button>
        </div>

        <div className="min-h-[100px] flex flex-col justify-center animate-in fade-in slide-in-from-bottom-2 duration-500">
          {view === 'literal' ? (
            <div>
              <p className="text-sea-blue/50 text-xs font-bold uppercase tracking-widest mb-1">Direct Translation</p>
              <p className="text-xl font-semibold text-sea-blue">"{data.literal_translation}"</p>
              <div className="mt-4 flex gap-4 text-sm">
                <span className="bg-ocean-teal/10 text-ocean-teal px-3 py-1 rounded-full">{data.tagalog_equiv}</span>
                <span className="bg-coral/10 text-coral px-3 py-1 rounded-full">{data.english_equiv}</span>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sea-blue/50 text-xs font-bold uppercase tracking-widest mb-1">Heritage & Usage</p>
              <p className="text-sea-blue leading-relaxed">
                {data.cultural_context}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhraseCard;
