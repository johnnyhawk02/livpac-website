import React from "react";

export default function News() {
  return (
    <main className="max-w-2xl mx-auto pt-6 px-4 min-h-screen pb-8">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-3 leading-tight tracking-tight">Social News</h1>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed font-medium">
          Latest updates, stories, and announcements from the LivPaC community.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-slate-700">
          <li>New parent support group starting in May</li>
          <li>Workshop: Navigating EHCPs – June 5th</li>
          <li>LivPaC featured in local news</li>
        </ul>
      </section>
    </main>
  );
}
