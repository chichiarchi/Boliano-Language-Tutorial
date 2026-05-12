import { Link } from 'react-router-dom';
import { Book, Compass, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-6xl md:text-8xl font-bold text-sea-blue tracking-tight mb-8">
          The Coast's <span className="text-coral">Living</span> Voice.
        </h1>
        <p className="text-xl text-sea-blue/60 max-w-2xl mx-auto leading-relaxed mb-10">
          Discover the Bolinao dialect (Binubolinao), a unique linguistic treasure from the shores of Pangasinan. Preserving heritage through modern learning.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/learn" className="btn-primary py-4 px-8 text-lg">Start Learning</Link>
          <Link to="/dictionary" className="bg-white text-sea-blue border border-sea-blue/10 py-4 px-8 rounded-full font-semibold hover:bg-sea-blue/5 transition-all">Browse Words</Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8">
          <div className="bg-coral/10 p-3 rounded-2xl w-fit mb-6 text-coral">
            <Book size={32} />
          </div>
          <h3 className="text-xl font-bold text-sea-blue mb-4">Curated Dictionary</h3>
          <p className="text-sea-blue/60">A growing collection of Bolinao terms with IPA phonetics and English/Tagalog translations.</p>
        </div>

        <div className="glass-card p-8">
          <div className="bg-ocean-teal/10 p-3 rounded-2xl w-fit mb-6 text-ocean-teal">
            <Compass size={32} />
          </div>
          <h3 className="text-xl font-bold text-sea-blue mb-4">Interactive Path</h3>
          <p className="text-sea-blue/60">Gamified quizzes and phrase-based learning designed to build conversational confidence.</p>
        </div>

        <div className="glass-card p-8">
          <div className="bg-sea-blue/10 p-3 rounded-2xl w-fit mb-6 text-sea-blue">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold text-sea-blue mb-4">Cultural Roots</h3>
          <p className="text-sea-blue/60">Beyond words: explore the traditions, history, and stories of the Bolinao people.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
