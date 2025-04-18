import React from 'react';

/**
 * A decorative header background that sits behind page titles
 * 100px tall with a gradient using the site's brand colors
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The page title to overlay on the header
 */
export default function PageHeader({ children }) {
  return (
    <div className="relative mb-6">
      {/* Decorative background - 100px tall */}
      <div className="h-[100px] w-full rounded-xl overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-magenta/10"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0), 
                             radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: '100px 100px' 
          }}>
        </div>
        
        {/* Edge highlight */}
        <div className="absolute left-0 top-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-magenta"></div>
      </div>
      
      {/* Content overlay (title) */}
      <div className="absolute inset-0 flex items-center px-4">
        {children}
      </div>
    </div>
  );
} 