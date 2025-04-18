import React from "react";

// Hardcoded news items
const newsItems = [
  {
    id: 1,
    title: "Summer Holiday Activities 2023",
    date: "2023-07-15",
    content: `
      <p>We're excited to announce our summer holiday activities program for families with SEND children!</p>
      <p>This summer, LivPaC has partnered with several local organizations to provide inclusive activities for children of all abilities. Activities include:</p>
      <ul>
        <li>Sensory-friendly swimming sessions at Liverpool Aquatics Centre</li>
        <li>Arts and crafts workshops at The Bluecoat</li>
        <li>Outdoor play sessions at Croxteth Park</li>
        <li>Family movie days with reduced sound and lights</li>
      </ul>
      <p>All activities are free for LivPaC members. To book your place, please contact us via email or phone.</p>
    `
  },
  {
    id: 2,
    title: "New Support Group Launching in September",
    date: "2023-06-20",
    content: `
      <p>LivPaC is launching a new monthly support group for parents and carers of children with additional needs.</p>
      <p>Starting in September, our new "Coffee & Chat" support group will meet on the first Tuesday of each month at The Granby Centre. This informal group offers a chance to meet other parents and carers, share experiences, and access support in a relaxed environment.</p>
      <p>No booking required - just drop in between 10am and 12pm. Refreshments provided.</p>
      <p><strong>First meeting:</strong> Tuesday, 5th September 2023</p>
    `
  },
  {
    id: 3,
    title: "Parent Carer Feedback: SEND Services Survey Results",
    date: "2023-05-10",
    content: `
      <p>Thank you to everyone who participated in our recent survey about SEND services in Liverpool.</p>
      <p>We received over 150 responses which have provided valuable insights into the experiences of families accessing services across the city. Key findings include:</p>
      <ul>
        <li>76% of respondents found the EHCP process challenging to navigate</li>
        <li>82% would like more information about available support</li>
        <li>53% reported difficulties accessing appropriate healthcare services</li>
      </ul>
      <p>We've shared these results with Liverpool City Council and local NHS services to help improve provision for our families. A full report is available on request.</p>
    `
  }
];

export default function News() {
  // Format date function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <main className="max-w-2xl mx-auto pt-6 px-4 min-h-screen pb-8">
      {/* Use the standard card layout */}
      <section className="card mt-8 mb-8"> 
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6 leading-tight tracking-tight text-center">News</h1>
        
        {newsItems.length > 0 ? (
          // Add spacing between posts
          <div className="space-y-8"> 
            {newsItems.map((item) => (
              // Render each post as an article, add border between posts
              <article key={item.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"> 
                <h2 className="text-2xl font-bold text-brand-primary mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {/* Format the date nicely */}
                  Published: {formatDate(item.date)}
                </p>
                {/* Render the HTML content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 prose-a:text-brand-primary hover:prose-a:text-brand-accent" 
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </article>
            ))}
          </div>
        ) : (
          // Message if no posts are found
          <p className="text-center text-gray-500 italic">No news posts found.</p> 
        )}
      </section>
    </main>
  );
}
