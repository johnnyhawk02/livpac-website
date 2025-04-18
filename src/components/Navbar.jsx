import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/livpac logo no text.png";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events Calendar", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Resources", path: "/resources" },
  { name: "Policies", path: "/policies" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow navbar sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 font-varela-round font-extrabold text-xl tracking-tight text-brand-primary dark:text-brand-light no-underline">
          <img src={logo} alt="LivPaC Logo" className="h-9 w-9 object-contain mr-2 drop-shadow" style={{marginRight: '0.5rem'}} />
          <span>LivPaC</span>
        </Link>
        
        <div className="flex items-center md:hidden">
          <DarkModeToggle />
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 p-0 ml-2 rounded-lg border border-brand-light dark:border-gray-700 bg-white dark:bg-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary dark:text-brand-light">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
                           (link.path === "/" && location.pathname === "/") ||
                           (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-varela-round transition-colors duration-200 font-semibold text-base px-1 no-underline hover:no-underline ${
                  isActive 
                    ? "text-brand-primary dark:text-brand-light border-b-2 border-brand-primary dark:border-brand-light" 
                    : "text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-light"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <DarkModeToggle />
        </div>
      </div>
      {open && (
        <div className="md:hidden px-3 pb-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg rounded-b-xl mt-2 animate-fade-in">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
                           (link.path === "/" && location.pathname === "/") ||
                           (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-varela-round block py-2 px-2 text-lg font-medium rounded transition-colors duration-150 no-underline hover:no-underline ${
                  isActive 
                    ? "text-brand-primary dark:text-brand-light bg-gray-100 dark:bg-gray-800" 
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-brand-primary dark:hover:text-brand-light"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
