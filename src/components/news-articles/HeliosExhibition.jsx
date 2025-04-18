import React from "react";

export const metadata = {
  id: "helios-exhibition",
  title: "Helios Exhibition Features Sensory-Friendly Hours",
  date: "2024-03-05",
  summary: "Liverpool Cathedral's stunning Helios sun sculpture offers special Quiet Hour sessions for those with sensory needs."
};

export default function HeliosExhibition() {
  return (
    <div className="news-article">
      <p>Through spring 2024, Liverpool Cathedral is hosting <strong>Helios</strong>, a stunning illuminated sculpture of the sun by artist Luke Jerram (the creator of the famous Museum of the Moon). Running from April 4 to May 9, this spectacular installation stands 7 meters tall and glows with intricate detail.</p>
      
      <p>To ensure everyone can enjoy this unique experience, the Cathedral has organized special <strong>Quiet Hour</strong> sessions designed specifically for those who prefer a calmer environment. During these sessions:</p>
      
      <ul>
        <li>Visitor numbers are strictly limited</li>
        <li>Lighting and sounds are adjusted to be less overwhelming</li>
        <li>The atmosphere is peaceful and unhurried</li>
      </ul>
      
      <p>These sensory-friendly slots are ideal for children with autism or anyone who finds crowds and noise challenging. Quiet Hours typically take place once or twice a week while Helios is on display.</p>
      
      <p><strong>Entry is free</strong> for general visiting hours, but for Quiet Hour times, you may need to pre-book a free slot via the Cathedral's website to ensure manageable numbers.</p>
      
      <p>Alongside Quiet Hours, the Cathedral is also offering family-friendly storytelling under Helios and even "sunrise yoga" sessions as part of the event program.</p>
      
      <p><em>Note: Helios will be temporarily paused around Easter services on April 18, then resumes until May 9.</em></p>
    </div>
  );
} 