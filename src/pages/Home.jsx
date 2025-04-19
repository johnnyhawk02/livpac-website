import React from "react";
import logo from "../assets/images/livpac logo no text.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* === New Hero Section === */}
      <section className="bg-gradient-to-br from-brand-primary to-teal-600 dark:from-teal-800 dark:to-gray-900 text-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src={logo} 
            alt="LivPaC Logo" 
            className="mx-auto mb-8 w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-lg"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-varela-round mb-4 tracking-tight">
            Welcome to LivPaC
          </h1>
          <p className="text-lg sm:text-xl text-teal-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Liverpool's official parent carer forum, empowering SEND families with support, information, and a collective voice.
          </p>
          <a 
            href="/about" 
            className="inline-block px-10 py-4 rounded-full bg-white hover:bg-gray-100 text-brand-primary dark:text-teal-700 dark:hover:bg-gray-200 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white"
          >
            Discover Our Mission
          </a>
        </div>
      </section>
      {/* === End New Hero Section === */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Services Section */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-colors duration-200">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h2 className="text-2xl sm:text-3xl font-bold font-varela-round text-brand-primary dark:text-brand-light tracking-tight">
              What We Offer
            </h2>
          </div>
          <ul className="list-none ml-0 sm:ml-2 space-y-3 text-gray-700 dark:text-gray-200 text-base sm:text-lg">
            <li className="flex items-start"><span className="text-brand-primary dark:text-brand-light mr-2 mt-1">✓</span> Coffee Mornings & Support Groups</li>
            <li className="flex items-start"><span className="text-brand-primary dark:text-brand-light mr-2 mt-1">✓</span> Training & Workshops</li>
            <li className="flex items-start"><span className="text-brand-primary dark:text-brand-light mr-2 mt-1">✓</span> One-to-One Support Sessions</li>
            <li className="flex items-start"><span className="text-brand-primary dark:text-brand-light mr-2 mt-1">✓</span> Advocacy & Representation</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="p-6 sm:p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 transition-colors duration-200">
           <div className="flex items-center mb-4">
             <svg className="w-8 h-8 text-brand-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             <h2 className="text-2xl sm:text-3xl font-bold font-varela-round text-brand-primary dark:text-brand-light tracking-tight">
              Connect With Us
            </h2>
          </div>
          <div className="space-y-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            <p><strong className="font-semibold text-gray-700 dark:text-gray-100">Address:</strong> The Granby Centre, 79 Granby Street, Liverpool, L8 2TU</p>
            <p>
              <strong className="font-semibold text-gray-700 dark:text-gray-100">Phone:</strong> 
              <a href="tel:+448450544638" className="ml-1 font-medium hover:underline text-brand-primary dark:text-brand-light">+44 8450 544 638</a> / 
              <a href="tel:+441517275271" className="ml-1 font-medium hover:underline text-brand-primary dark:text-brand-light">0151 727 5271</a>
            </p>
            <p>
              <strong className="font-semibold text-gray-700 dark:text-gray-100">Email:</strong> 
              <a href="mailto:info@livpac.org.uk" className="ml-1 font-medium hover:underline text-brand-primary dark:text-brand-light">info@livpac.org.uk</a>
            </p>
          </div>
          <div className="flex space-x-5 mt-6">
            {/* Placeholder social icons - Consider using actual icon components if available */}
            <a href="#" aria-label="Twitter" className="text-brand-primary dark:text-brand-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors text-3xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-brand-primary dark:text-brand-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors text-3xl">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
