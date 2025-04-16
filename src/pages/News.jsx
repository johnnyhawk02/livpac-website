import React, { useEffect } from "react";

export default function News() {
  useEffect(() => {
    const scriptId = "juicer-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.src = "https://www.juicer.io/embed/livpacl8/embed-code.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="max-w-2xl mx-auto pt-6 px-4 min-h-screen pb-8">
      <section className="card mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mb-3 leading-tight tracking-tight">Social News</h1>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed font-medium">
          Latest updates, stories, and announcements from the LivPaC community.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-slate-700 mb-6">
          <li>New parent support group starting in May</li>
          <li>Workshop: Navigating EHCPs – June 5th</li>
          <li>LivPaC featured in local news</li>
        </ul>
        {/* Twitter Feed Section */}
        <section className="twitter-feed mb-6">
          <h2 className="text-2xl font-bold text-sky-600 mb-2 flex items-center">
            <span className="mr-2"><i className="fab fa-twitter"></i></span> Latest Twitter Updates
          </h2>
          <p className="text-slate-600 mb-2">Follow our Twitter feed for real-time updates, news shares, and community engagement:</p>
          <div className="social-embed juicer-feed" data-feed-id="livpacl8">
            {/* Juicer will inject the Twitter feed here */}
          </div>
        </section>
      </section>
    </main>
  );
}
