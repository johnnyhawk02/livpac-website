import React from "react";

export const metadata = {
  id: "summer-activities-2023",
  title: "Summer Holiday Activities 2023",
  date: "2023-07-15",
  summary: "Exciting inclusive activities for families with SEND children throughout the summer break."
};

export default function SummerActivities() {
  return (
    <div className="news-article">
      <p>We're excited to announce our summer holiday activities program for families with SEND children!</p>
      
      <p>This summer, LivPaC has partnered with several local organizations to provide inclusive activities for children of all abilities. Activities include:</p>
      
      <ul>
        <li>Sensory-friendly swimming sessions at Liverpool Aquatics Centre</li>
        <li>Arts and crafts workshops at The Bluecoat</li>
        <li>Outdoor play sessions at Croxteth Park</li>
        <li>Family movie days with reduced sound and lights</li>
      </ul>
      
      <p>All activities are free for LivPaC members. To book your place, please contact us via email or phone.</p>
    </div>
  );
} 