import React from 'react';

/**
 * A decorative banner component that sits at the top inside the white card
 * 100px tall with a gradient/pattern using the site's brand colors
 * The page title overlays this banner
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The page title to overlay on the banner
 * @param {string} props.image - Optional background image URL
 */
export default function PageTitleBanner({ children, image }) {
  return (
    <div className="relative h-[100px] -mx-[1.2rem] -mt-[1.6rem] mb-6 rounded-t-[1.1rem] overflow-hidden">
      {/* Background image if provided */}
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover opacity-80" 
          />
          {/* Dark overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}
      
      {/* Decorative background - 100px tall (shown when no image) */}
      {!image && (
        <div className="absolute inset-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/15 via-brand-accent/15 to-brand-magenta/15"></div>
          
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.5) 2px, transparent 0), 
                              radial-gradient(circle at 75px 75px, rgba(255,255,255,0.5) 2px, transparent 0)`,
              backgroundSize: '100px 100px' 
            }}>
          </div>
          
          {/* Subtle diagonal stripes */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 2px, transparent 2px, transparent 10px)'
            }}>
          </div>
        </div>
      )}
      
      {/* Content overlay (title) */}
      <div className="absolute inset-0 flex items-center px-6 z-10">
        {children}
      </div>
    </div>
  );
} 