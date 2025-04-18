import React from "react";

export const metadata = {
  id: "survey-results-2023",
  title: "Parent Carer Feedback: SEND Services Survey Results",
  date: "2023-05-10",
  summary: "Results from our recent survey about SEND services in Liverpool revealing key areas for improvement."
};

export default function SurveyResults() {
  return (
    <div className="news-article">
      <p>Thank you to everyone who participated in our recent survey about SEND services in Liverpool.</p>
      
      <p>We received over 150 responses which have provided valuable insights into the experiences of families accessing services across the city. Key findings include:</p>
      
      <ul>
        <li>76% of respondents found the EHCP process challenging to navigate</li>
        <li>82% would like more information about available support</li>
        <li>53% reported difficulties accessing appropriate healthcare services</li>
      </ul>
      
      <p>We've shared these results with Liverpool City Council and local NHS services to help improve provision for our families. A full report is available on request.</p>
    </div>
  );
} 