import React from "react";

export default function Policies() {
  return (
    <main className="min-h-screen pb-8">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-3 leading-tight tracking-tight">Policies</h1>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed font-medium">
          Our key policies for transparency, safeguarding, and best practice.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-slate-700">
          <li><a href="#" className="font-semibold hover:underline">Safeguarding Policy</a></li>
          <li><a href="#" className="font-semibold hover:underline">Data Protection & Privacy Policy</a></li>
          <li><a href="#" className="font-semibold hover:underline">Complaints Procedure</a></li>
          <li><a href="#" className="font-semibold hover:underline">Code of Conduct</a></li>
          <li><a href="#" className="font-semibold hover:underline">Constitution & Governance</a></li>
          <li><a href="#" className="font-semibold hover:underline">And more (coming soon)</a></li>
        </ul>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
          <strong>Need a document?</strong> Please <a href="/contact" className="text-indigo-600 underline">contact us</a> to request copies of our policies.
        </div>
      </section>
    </main>
  );
}
