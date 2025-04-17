import React from "react";
import { marked } from 'marked'; // Import marked
import fm from 'front-matter'; // Import front-matter

// Vite Glob Import to get all markdown files from the news directory
// Ensure this path matches where you created the .md files
const modules = import.meta.glob('../content/news/*.md', { 
  as: 'raw', // Import as raw text strings
  eager: true // Load modules immediately (can be false for lazy loading if needed)
});

// Process the imported modules
const posts = Object.entries(modules).map(([filepath, rawContent]) => {
  try {
    // Parse frontmatter (attributes) and body from the raw string
    const { attributes, body } = fm(rawContent); 
    // Convert markdown body to HTML string
    const htmlContent = marked.parse(body); 
    return {
      ...attributes, // Spread frontmatter attributes (e.g., title, date)
      htmlContent,  // Add the parsed HTML content
      // Create a simple slug from the filename for the key
      slug: filepath.substring(filepath.lastIndexOf('/') + 1).replace('.md', '') 
    };
  } catch (e) {
    // Log error if parsing fails for a file
    console.error(`Error processing file ${filepath}:`, e);
    return null; // Skip files that cause errors
  }
}).filter(post => post !== null) // Remove any null entries resulting from errors
  .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending (newest first)

export default function News() {

  return (
    <main className="max-w-2xl mx-auto pt-6 px-4 min-h-screen pb-8">
      {/* Use the standard card layout */}
      <section className="card mt-8 mb-8"> 
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-6 leading-tight tracking-tight text-center">Social News</h1>
        
        {posts.length > 0 ? (
          // Add spacing between posts
          <div className="space-y-8"> 
            {posts.map((post) => (
              // Render each post as an article, add border between posts
              <article key={post.slug} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"> 
                <h2 className="text-2xl font-bold text-brand-primary mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {/* Format the date nicely */}
                  Published: {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                {/* Render the HTML generated from Markdown */}
                {/* Apply Tailwind typography plugin styles for basic markdown formatting */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 prose-a:text-brand-primary hover:prose-a:text-brand-accent" 
                  dangerouslySetInnerHTML={{ __html: post.htmlContent }}
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
