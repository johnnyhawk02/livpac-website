import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import News from "./pages/News";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto p-4">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><Home /></motion.div>} />
            <Route path="/about" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><About /></motion.div>} />
            <Route path="/resources" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><Resources /></motion.div>} />
            <Route path="/events" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><Events /></motion.div>} />
            <Route path="/news" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><News /></motion.div>} />
            <Route path="/policies" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><Policies /></motion.div>} />
            <Route path="/contact" element={<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}><Contact /></motion.div>} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-8">
        &copy; {new Date().getFullYear()} LivPaC (Liverpool Parent and Carers). All rights reserved.
      </footer>
    </div>
  );
}
