import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/livpac logo no text.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Resources", path: "/resources" },
  { name: "Events Calendar", path: "/events" },
  { name: "Social News", path: "/news" },
  { name: "Policies", path: "/policies" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="bg-white shadow navbar sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 font-extrabold text-xl tracking-tight text-brand-primary">
          <img src={logo} alt="LivPaC Logo" className="h-9 w-9 object-contain mr-2 drop-shadow" style={{marginRight: '0.5rem'}} />
          <span>LivPaC</span>
        </Link>
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 p-0 rounded-lg border border-brand-light bg-white shadow focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-brand-accent transition-colors duration-200 font-semibold text-base px-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden px-3 pb-3 bg-white border-t shadow-lg rounded-b-xl mt-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 px-2 text-gray-800 hover:text-brand-accent text-lg font-medium rounded transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
