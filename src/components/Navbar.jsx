import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <nav className="bg-white shadow sticky top-0 z-50">
      <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-lg text-indigo-700">LivPaC</Link>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-indigo-600 transition-colors duration-200 font-medium relative group"
            >
              <span className="group-hover:underline group-hover:decoration-2 transition-all duration-200">{link.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="md:hidden px-2 pb-2 bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
