import React from "react";
import logo from "../assets/images/livpac logo no text.png";

// Placeholder for a stylized graphic or large logo element
const HeroGraphic = () => (
  <div className="flex items-center justify-center p-8 bg-brand-light/20 dark:bg-brand-primary/10 rounded-full aspect-square">
    <img 
      src={logo} 
      alt="LivPaC Stylized Logo" 
      className="w-3/4 h-3/4 object-contain opacity-80 drop-shadow-lg"
    />
    {/* Alternative idea: Replace img with a custom SVG graphic related to family/support */}
  </div>
);

const ServiceItem = ({ title }) => (
  <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <span className="text-brand-accent text-2xl mr-3">✓</span>
    <span className="text-gray-700 dark:text-gray-200 font-medium">{title}</span>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* === Radical Hero Section === */}
      <section className="bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-varela-round text-brand-primary dark:text-brand-light mb-6 tracking-tight">
                Supporting Liverpool's SEND Families
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                LivPaC is your dedicated parent carer forum, providing vital support, information, and representation for families of children and young people with SEND.
              </p>
              <a 
                href="/about" 
                className="inline-block px-8 py-3 rounded-md bg-brand-accent hover:bg-brand-accent/80 text-white text-lg font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent/50 transform hover:-translate-y-1"
              >
                Find Out More
              </a>
            </div>

            {/* Right Column: Visual Element */}
            <div className="hidden md:block">
              <HeroGraphic />
            </div>
          </div>
        </div>
      </section>
      {/* === End Radical Hero Section === */}

      {/* === Integrated Services & Contact Section === */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-varela-round text-center text-brand-primary dark:text-brand-light mb-10 tracking-tight">
            How We Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceItem title="Coffee Mornings & Support Groups" />
            <ServiceItem title="Training & Workshops" />
            <ServiceItem title="One-to-One Support Sessions" />
            <ServiceItem title="Advocacy & Representation" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
           <h2 className="text-3xl font-bold font-varela-round text-center text-brand-primary dark:text-brand-light mb-10 tracking-tight">
             Get In Touch
          </h2>
           <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200 mb-6">
              <p>
                 <strong className="block text-brand-primary dark:text-brand-light font-semibold mb-1">Address:</strong> 
                 The Granby Centre, 79 Granby Street, Liverpool, L8 2TU
              </p>
              <p>
                <strong className="block text-brand-primary dark:text-brand-light font-semibold mb-1">Phone:</strong> 
                <a href="tel:+448450544638" className="hover:underline text-brand-accent">+44 8450 544 638</a> / 
                <a href="tel:+441517275271" className="hover:underline text-brand-accent">0151 727 5271</a>
              </p>
              <p>
                <strong className="block text-brand-primary dark:text-brand-light font-semibold mb-1">Email:</strong> 
                <a href="mailto:info@livpac.org.uk" className="hover:underline text-brand-accent">info@livpac.org.uk</a>
              </p>
            </div>
            <div className="flex space-x-6 mt-8 justify-center">
              <a href="#" aria-label="Twitter" className="text-brand-primary dark:text-brand-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors text-4xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook" className="text-brand-primary dark:text-brand-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors text-4xl">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* === End Integrated Section === */}
    </main>
  );
}
