import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Dictionary from './pages/Dictionary';
import Culture from './pages/Culture';

function App() {
  return (
    <div className="min-h-screen bg-sand-beige">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/culture" element={<Culture />} />
        </Routes>
      </main>
      
      <footer className="bg-sea-blue text-sand-beige py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-semibold text-lg mb-2">Preserving the Bolinao Voice</p>
          <p className="opacity-70 text-sm">© 2026 Bolinao Dialect & Culture Platform</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
