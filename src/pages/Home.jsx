import React from "react";
import logo from "../assets/images/livpac logo no text.png";

export default function Home() {
  return (
    <main className="min-h-screen pb-8">
      {/* Removed Introductory Text Section */}

      {/* Hero Section */}
      <section className="mt-8 mb-10 px-4">
        <div className="card mb-8 text-center shadow-md rounded-xl bg-white">
          <img src={logo} alt="LivPaC Logo" className="mx-auto mb-5 w-28 h-28 object-contain drop-shadow" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-primary mb-2 leading-tight tracking-tight">
            Welcome to LivPaC
          </h1>
          <p className="text-lg text-gray-600 mb-2 leading-relaxed font-medium">
            Liverpool Parent and Carers (LivPaC) is the official parent carer forum for Liverpool, representing families of children and young people with special educational needs and disabilities (SEND).
          </p>
          <p className="text-base text-gray-500 mb-5">
            Empowering parents and carers to have a voice and navigate SEND processes through awareness, information and confidence training.
          </p>
          <a href="/about" className="inline-block px-6 py-2 rounded-full bg-brand-primary text-white font-semibold shadow transition-all duration-200 text-lg mt-2 focus:outline-none focus:ring-2 focus:ring-brand-primary/50">
            Learn More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="card mx-auto mb-8 px-4 py-6 rounded-lg shadow bg-white">
        <div className="flex items-center mb-2">
          <svg className="w-7 h-7 text-brand-primary mr-2" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-3-3-3-3s-3 1.343-3 3a3 3 0 006 0zm0 0c0-1.657 3-3 3-3s3 1.343 3 3a3 3 0 01-6 0z" /></svg>
          <h2 className="text-2xl font-bold text-brand-primary tracking-tight">Our Services</h2>
        </div>
        <ul className="list-disc ml-8 space-y-1 text-gray-700 text-base">
          <li>Coffee Mornings and Support Groups</li>
          <li>Training and Workshops</li>
          <li>One-to-One Support</li>
          <li>Advocacy and Representation</li>
        </ul>
      </section>
      {/* Contact Section */}
      <section className="card mx-auto px-4 py-6 rounded-lg shadow bg-white">
        <h2 className="text-2xl font-bold text-brand-primary mb-2 tracking-tight">Contact Us</h2>
        <div className="space-y-1 text-base text-gray-600">
          <p>The Granby Centre, 79 Granby Street, Liverpool, L8 2TU</p>
          <p>Phone: <a href="tel:+448450544638" className="font-semibold hover:underline">+44 8450 544 638</a> / <a href="tel:+441517275271" className="font-semibold hover:underline">0151 727 5271</a></p>
          <p>Email: <a href="mailto:info@livpac.org.uk" className="font-semibold hover:underline">info@livpac.org.uk</a></p>
        </div>
        <div className="flex space-x-4 mt-4 justify-center">
          <a href="#" aria-label="Twitter" className="text-brand-primary transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Facebook" className="text-brand-primary transition-colors text-2xl"><i className="fab fa-facebook"></i></a>
        </div>
      </section>
    </main>
  );
}
