import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-sand-beige/80 backdrop-blur-md border-b border-sea-blue/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-sea-blue font-bold text-xl">
        <Anchor className="text-coral" size={28} />
        <span className="tracking-tight">Bolinao Heritage</span>
      </Link>
      
      <div className="flex gap-8 font-semibold">
        <Link to="/learn" className="nav-link">Learn</Link>
        <Link to="/dictionary" className="nav-link">Dictionary</Link>
        <Link to="/culture" className="nav-link">Culture</Link>
      </div>

      <div className="hidden md:block">
        <div className="bg-sea-blue/10 px-4 py-1 rounded-full text-sm text-sea-blue border border-sea-blue/20">
          Dialect Platform
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
