import React from 'react';

/**
 * PageContainer - A consistent container for all pages
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description (optional)
 */
export default function PageContainer({ children, title, description }) {
  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8 bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-colors duration-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-brand-light mb-3 leading-tight tracking-tight font-varela-round">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            {description}
          </p>
        )}
        {children}
      </section>
    </main>
  );
} 