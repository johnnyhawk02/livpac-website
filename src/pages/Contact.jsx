import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen pb-8">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3 leading-tight tracking-tight">Contact</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
          Get in touch with LivPaC for support, advice, or to join our community.
        </p>
        <div className="bg-brand-primary/10 rounded-lg p-4 mb-2">
          <h2 className="text-lg font-semibold text-brand-primary mb-1">Contact Details</h2>
          <div className="space-y-1 text-base text-gray-600">
            <p>The Granby Centre, 79 Granby Street, Liverpool, L8 2TU</p>
            <p>Phone: <a href="tel:+448450454638" className="font-semibold hover:underline">+44 8450 544 638</a> / <a href="tel:+441517275271" className="font-semibold hover:underline">0151 727 5271</a></p>
            <p>Email: <a href="mailto:info@livpac.org.uk" className="font-semibold hover:underline">info@livpac.org.uk</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
