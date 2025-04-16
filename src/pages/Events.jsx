import React from "react";

export default function Events() {
  return (
    <main className="max-w-2xl mx-auto pt-6 px-4 min-h-screen pb-8">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3 leading-tight tracking-tight">Events Calendar</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
          Join us for regular coffee mornings, support groups, and special events across Liverpool. Check back often for new dates and venues!
        </p>
        <div className="bg-brand-primary/10 rounded-lg p-4 mb-2">
          <h2 className="text-lg font-semibold text-brand-primary mb-1">Upcoming Events</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Coffee & Connect mornings at local venues</li>
            <li>Support sessions at Clubmoor Children's Centre</li>
            <li>Workshops and training sessions</li>
            <li>See our <a href="/news" className="font-semibold hover:underline">Social News</a> for the latest updates</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
