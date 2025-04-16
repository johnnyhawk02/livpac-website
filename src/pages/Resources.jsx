import React from "react";

export default function Resources() {
  return (
    <main className="max-w-2xl mx-auto pt-6 px-4 min-h-screen pb-8">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-3 leading-tight tracking-tight">Resources</h1>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed font-medium">
          Helpful links, guides, and downloadable materials for families of children and young people with SEND.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-slate-700 text-lg">
          <li><a href="#" className="font-semibold hover:underline">Liverpool SEND Local Offer</a></li>
          <li><a href="#" className="font-semibold hover:underline">Parent Carer Support Guide</a></li>
          <li><a href="#" className="font-semibold hover:underline">EHCP Information Pack</a></li>
          <li><a href="#" className="font-semibold hover:underline">Useful Contacts</a></li>
        </ul>
      </section>
    </main>
  );
}
