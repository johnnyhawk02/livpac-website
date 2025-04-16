import React from "react";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto pt-6 px-4">
      <section className="card mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-3 leading-tight tracking-tight">Welcome to LivPaC</h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
          Liverpool Parent and Carers (LivPaC) is the official parent carer forum for Liverpool, representing families of children and young people with special educational needs and disabilities (SEND).
        </p>
        <p className="text-base text-slate-500 mb-2">
          Empowering parents and carers to have a voice and navigate SEND processes through awareness, information and confidence training.
        </p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold text-indigo-600 mb-2 tracking-tight">Our Services</h2>
        <ul className="list-disc ml-6 space-y-1 text-slate-700">
          <li>Coffee Mornings and Support Groups</li>
          <li>Training and Workshops</li>
          <li>One-to-One Support</li>
          <li>Advocacy and Representation</li>
        </ul>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold text-indigo-600 mb-2 tracking-tight">Contact Us</h2>
        <div className="space-y-1 text-base text-slate-600">
          <p>The Granby Centre, 79 Granby Street, Liverpool, L8 2TU</p>
          <p>Phone: <a href="tel:+448450454638" className="font-semibold text-indigo-700 hover:underline">+44 8450 544 638</a> / <a href="tel:+441517275271" className="font-semibold text-indigo-700 hover:underline">0151 727 5271</a></p>
          <p>Email: <a href="mailto:info@livpac.org.uk" className="font-semibold text-indigo-700 hover:underline">info@livpac.org.uk</a></p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.facebook.com/LiverpoolParentAndCarers" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-indigo-500 hover:text-indigo-700 transition-colors text-2xl"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/LivPaCL8" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-indigo-500 hover:text-indigo-700 transition-colors text-2xl"><i className="fab fa-twitter"></i></a>
        </div>
      </section>
    </main>
  );
}
