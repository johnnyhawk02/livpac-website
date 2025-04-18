import React from "react";
import { newsArticles } from "../components/news-articles";

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
        
        {newsArticles.length > 0 ? (
          // Add spacing between posts
          <div className="space-y-8"> 
            {newsArticles.map((article) => {
              const ArticleComponent = article.Component;
              
              return (
                <article key={article.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"> 
                  <h2 className="text-2xl font-bold text-brand-primary mb-2">{article.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Published: {formatDate(article.date)}
                  </p>
                  
                  {/* Render the actual component */}
                  <div className="prose prose-lg max-w-none text-gray-700 prose-a:text-brand-primary hover:prose-a:text-brand-accent">
                    <ArticleComponent />
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500 italic">No news posts found.</p> 
        )}
      </section>
    </main>
  );
}
