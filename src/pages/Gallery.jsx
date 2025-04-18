import React from "react";
import robynImage from "../assets/images/robyn at caft.jpg"; // Import the image
import singingHandsImage from "../assets/images/singing hands.jpg"; // Import new image

// TODO: Add more images here and map over them
const galleryImages = [
  {
    src: robynImage,
    alt: "Robyn balancing on a wooden beam in a woodland play area",
    caption: "Adventure time at the Children's Adventure Farm Trust"
  },
  {
    src: singingHandsImage, // Add new image object
    alt: "Two adults in red Singing Hands t-shirts sitting with two children",
    caption: "Making music with Singing Hands"
  }
  // Add more image objects like the one above
];

export default function Gallery() {
  return (
    <main className="min-h-screen pb-8">
      <section className="card mt-8 mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3 leading-tight tracking-tight">Photo Gallery</h1>
        <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
          Welcome to our photo gallery showcasing moments from LivPaC events and activities. 
          Here you'll find a collection of memories from our community gatherings.
        </p>

        {/* Gallery Grid */}
        <div className="mb-6">
          {galleryImages.length > 0 ? (
            <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden group relative shadow-md hover:shadow-xl transition-shadow duration-300 break-inside-avoid rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto object-cover block rounded-lg"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-brand-primary bg-opacity-80 p-2 opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-white text-center text-sm px-1">
                        {image.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-center">No photos available yet. Check back soon for updates.</p>
          )}
        </div>
        
        {/* Call to Action Section */}
        <div className="bg-brand-primary/10 rounded-lg p-4 mt-6">
          <h2 className="text-lg font-semibold text-brand-primary mb-2">Share Your Photos</h2>
          <p className="text-base text-gray-600 mb-2">
            If you have photos from our events that you'd like to share, we'd love to include them in our gallery.
          </p>
          <p className="text-sm text-gray-500">
            Please contact us to submit your photos and help our community album grow.
          </p>
        </div>
      </section>
    </main>
  );
}
// EMERGENCY FIX
// TESTING UPDATE
// SUPER AWESOME GALLERY PAGE
