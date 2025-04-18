import React, { useState } from "react";
import { newsArticles } from "../components/news-articles";

export default function News() {
  // State to track which articles are expanded
  const [expandedArticles, setExpandedArticles] = useState({});
  
  // Format date function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  // Toggle article expansion
  const toggleArticle = (id) => {
    setExpandedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3 leading-tight tracking-tight">News</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
          Stay updated with the latest developments in the Liverpool SEND community.
        </p>
        
        {newsArticles.length > 0 ? (
          // Add spacing between posts
          <div className="space-y-8"> 
            {newsArticles.map((article) => {
              const ArticleComponent = article.Component;
              const isExpanded = expandedArticles[article.id] || false;
              
              return (
                <article 
                  key={article.id} 
                  className={`border-b border-gray-200 pb-6 last:border-b-0 last:pb-0 transition-all duration-300 ${isExpanded ? 'bg-gray-50 rounded-lg p-4 -mx-4' : ''}`}
                > 
                  {/* Article header section */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-brand-primary mb-2 hover:text-brand-accent transition-colors duration-300 cursor-pointer" onClick={() => toggleArticle(article.id)}>
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-4">
                        Published: {formatDate(article.date)}
                      </p>
                    </div>
                    
                    {/* Expand/collapse button with icon */}
                    <button 
                      onClick={() => toggleArticle(article.id)}
                      className={`w-8 h-8 flex items-center justify-center rounded-full border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 focus:outline-none mt-1 transform ${isExpanded ? 'rotate-180' : ''}`}
                      aria-label={isExpanded ? 'Collapse article' : 'Expand article'}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Summary that's always visible */}
                  <p className="mb-4 text-gray-700">{article.summary}</p>
                  
                  {/* Full article content container with animation */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="prose prose-lg max-w-none text-gray-700 prose-a:text-brand-primary hover:prose-a:text-brand-accent mt-4 pt-4 border-t border-gray-200">
                      <ArticleComponent />
                    </div>
                    
                    {/* Bottom button to collapse article */}
                    <div className="text-center mt-6">
                      <button 
                        onClick={() => toggleArticle(article.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300 focus:outline-none text-sm"
                      >
                        <span>Close article</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Read more button - only shown when collapsed */}
                  {!isExpanded && (
                    <button 
                      onClick={() => toggleArticle(article.id)}
                      className="mt-2 inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent focus:outline-none transition-colors duration-300"
                    >
                      <span className="font-medium">Read full article</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
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
