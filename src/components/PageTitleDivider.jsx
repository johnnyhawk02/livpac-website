import React from 'react';

/**
 * A decorative divider to be placed beneath page titles
 * Uses a gradient of the brand colors for visual interest
 */
export default function PageTitleDivider() {
  return (
    <div className="relative w-full h-1 mb-6 mt-2 rounded-full overflow-hidden">
      {/* Main gradient divider */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-magenta rounded-full"></div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-white to-transparent"></div>
    </div>
  );
} 