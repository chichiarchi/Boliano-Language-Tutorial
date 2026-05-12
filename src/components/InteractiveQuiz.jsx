import { useState, useEffect } from 'react';
import languageData from '../data/languageData.json';
import { CheckCircle2, XCircle, RefreshCw, Trophy } from 'lucide-react';

const InteractiveQuiz = () => {
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const generateQuestion = () => {
    const randomIdx = Math.floor(Math.random() * languageData.length);
    const correct = languageData[randomIdx];
    
    // Get 3 random wrong answers
    let wrong = languageData
      .filter(item => item.id !== correct.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    const allOptions = [...wrong, correct].sort(() => 0.5 - Math.random());
    
    setQuestion(correct);
    setOptions(allOptions);
    setSelected(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleAnswer = (optionId) => {
    if (selected !== null) return;
    
    setSelected(optionId);
    const correct = optionId === question.id;
    setIsCorrect(correct);
    setTotal(prev => prev + 1);
    if (correct) {
      setScore(prev => prev + 1);
      // Save progress to localStorage
      const currentProgress = JSON.parse(localStorage.getItem('bolinao_progress') || '{"score": 0, "total": 0}');
      localStorage.setItem('bolinao_progress', JSON.stringify({
        score: currentProgress.score + 1,
        total: currentProgress.total + 1
      }));
    } else {
        const currentProgress = JSON.parse(localStorage.getItem('bolinao_progress') || '{"score": 0, "total": 0}');
        localStorage.setItem('bolinao_progress', JSON.stringify({
          ...currentProgress,
          total: currentProgress.total + 1
        }));
    }
  };

  if (!question) return null;

  return (
    <div className="max-w-2xl mx-auto glass-card p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-sea-blue font-bold">
          <Trophy className="text-coral" size={20} />
          <span>Score: {score}/{total}</span>
        </div>
        <button 
          onClick={generateQuestion}
          className="text-sea-blue/60 hover:text-sea-blue transition-colors flex items-center gap-2 text-sm font-semibold"
        >
          <RefreshCw size={16} /> Skip
        </button>
      </div>

      <div className="text-center mb-10">
        <p className="text-sea-blue/50 text-xs font-bold uppercase tracking-widest mb-2">What does this word mean?</p>
        <h2 className="text-5xl font-bold text-sea-blue mb-4">{question.term}</h2>
        <p className="text-sea-blue/40 italic">{question.ipa_phonetic}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          let stateStyles = "bg-white border-sea-blue/10 text-sea-blue hover:border-coral/50";
          if (selected !== null) {
            if (option.id === question.id) stateStyles = "bg-green-100 border-green-500 text-green-700";
            else if (option.id === selected) stateStyles = "bg-red-100 border-red-500 text-red-700";
            else stateStyles = "bg-white opacity-50 border-sea-blue/10";
          }

          return (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              disabled={selected !== null}
              className={`p-4 rounded-xl border-2 transition-all font-semibold flex justify-between items-center ${stateStyles}`}
            >
              {option.english_equiv}
              {selected !== null && option.id === question.id && <CheckCircle2 size={20} />}
              {selected !== null && option.id === selected && option.id !== question.id && <XCircle size={20} />}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-10 text-center animate-in zoom-in duration-300">
          <button 
            onClick={generateQuestion}
            className="btn-primary flex items-center gap-2 mx-auto"
          >
            Next Question <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

const ChevronRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default InteractiveQuiz;
