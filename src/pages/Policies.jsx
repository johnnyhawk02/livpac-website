import React from "react";

export default function Policies() {
  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-brand-light mb-3 leading-tight tracking-tight">Policies</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
          Our key policies for transparency, safeguarding, and best practice.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li><a href="#" className="font-semibold hover:underline text-brand-primary dark:text-brand-light">Safeguarding Policy</a></li>
          <li><a href="#" className="font-semibold hover:underline text-brand-primary dark:text-brand-light">Data Protection & Privacy Policy</a></li>
          <li><a href="#" className="font-semibold hover:underline text-brand-primary dark:text-brand-light">Complaints Procedure</a></li>
          <li><a href="#" className="font-semibold hover:underline text-brand-primary dark:text-brand-light">Code of Conduct</a></li>
          <li><a href="#" className="font-semibold hover:underline text-brand-primary dark:text-brand-light">Constitution & Governance</a></li>
          <li><a href="#" className="font-semibold hover:underline text-brand-primary dark:text-brand-light">And more (coming soon)</a></li>
        </ul>
        <div className="bg-brand-magenta/10 dark:bg-brand-magenta/20 border-l-4 border-brand-magenta p-4 mt-4 text-gray-700 dark:text-gray-200">
          <strong>Need a document?</strong> Please <a href="/contact" className="underline text-brand-primary dark:text-brand-light">contact us</a> to request copies of our policies.
        </div>
      </section>
    </main>
  );
}
