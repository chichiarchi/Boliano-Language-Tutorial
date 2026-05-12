import { useState } from 'react';
import languageData from '../data/languageData.json';
import { Search, Volume2 } from 'lucide-react';

const DictionaryGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = languageData.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.english_equiv.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tagalog_equiv.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sea-blue/40" size={20} />
        <input 
          type="text" 
          placeholder="Search Bolinao, Tagalog, or English..."
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-sea-blue/10 focus:outline-none focus:ring-2 focus:ring-coral/30 transition-all shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-sea-blue">{item.term}</h3>
                <p className="text-sm text-sea-blue/60 italic font-mono">{item.ipa_phonetic}</p>
              </div>
              <button className="p-2 rounded-full bg-sea-blue/5 text-sea-blue hover:bg-sea-blue hover:text-sand-beige transition-colors">
                <Volume2 size={18} />
              </button>
            </div>
            
            <div className="space-y-3 border-t border-sea-blue/5 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-sea-blue/50 uppercase tracking-wider font-bold text-[10px]">Tagalog</span>
                <span className="font-semibold">{item.tagalog_equiv}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sea-blue/50 uppercase tracking-wider font-bold text-[10px]">English</span>
                <span className="font-semibold text-coral">{item.english_equiv}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredData.length === 0 && (
        <div className="text-center py-20 text-sea-blue/40">
          <p className="text-xl">No words found in our coastal archives.</p>
        </div>
      )}
    </div>
  );
};

export default DictionaryGrid;
