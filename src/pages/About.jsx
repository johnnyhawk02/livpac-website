import React from "react";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto pt-6 px-4">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-3 leading-tight tracking-tight">About Us</h1>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed font-medium">
          LivPaC (Liverpool Parent and Carers) is a community-driven forum supporting families of children and young people with special educational needs and disabilities (SEND) across Liverpool.
        </p>
        <ul className="list-disc ml-6 space-y-1 text-slate-700 mb-4">
          <li>Championing the voices of parents and carers</li>
          <li>Collaborating with local services and partners</li>
          <li>Promoting inclusion, awareness, and empowerment</li>
        </ul>
        <p className="text-base text-slate-500">
          Our mission is to provide a safe, welcoming space for families to connect, learn, and access vital resources.
        </p>
      </section>
    </main>
  );
}
