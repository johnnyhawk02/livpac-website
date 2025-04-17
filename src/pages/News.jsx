import React from "react";

export default function News() {

  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3 leading-tight tracking-tight">Social News</h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
          Latest updates, stories, and announcements from the LivPaC community.
        </p>

        {/* Manually Updated News List */}
        <div className="bg-brand-primary/10 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-brand-primary mb-3">Latest Updates</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {/* Donna (or developer) needs to edit items directly here */}
            <li>New parent support group starting soon - watch this space!</li>
            <li>Recap: Successful workshop on Navigating EHCPs held last month.</li>
            <li>LivPaC mentioned in recent community newsletter.</li>
          </ul>
        </div>

      </section>
    </main>
  );
}
