import React from "react";
import robynImage from "../assets/images/robyn at caft.jpg"; // Import the image
import singingHandsImage from "../assets/images/singing hands.jpg"; // Import new image

// TODO: Add more images here and map over them
const galleryImages = [
  {
    src: robynImage,
    alt: "Robyn balancing on a wooden beam in a woodland play area",
    caption: "Adventure time at Children's Adventure Farm Trust!"
  },
  {
    src: singingHandsImage, // Add new image object
    alt: "Two adults in red Singing Hands t-shirts sitting with two children",
    caption: "Learning through music with the amazing Singing Hands team!"
  }
  // Add more image objects like the one above
];

export default function Gallery() {
  return (
    <main className="min-h-screen pb-8">
      {/* Wrap content in a card div for consistency */}
      <div className="card mt-8 mb-8">
        {/* Combined Header Section */}
        <section className="mb-10 text-center"> {/* Removed mt/px from section */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-4 leading-tight tracking-tight">
            Moments Worth Celebrating
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto">
            Welcome to our visual journey! Here we showcase the beautiful connections, joyful experiences, and memorable events that make LivPaC so special. Each photo tells a story of inclusion, support, and community spirit.
          </p>
        </section>
        {/* End Header Section */}

        {/* Gallery Grid */}
        <section> {/* Removed mb/px from section */}
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
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                      <p className="text-white text-center text-sm px-1">
                        {image.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-center">More photos coming soon!</p>
          )}
        </section>
        {/* End Gallery Grid */}
        
        {/* New Call to Action Section */}
        <section className="mt-12 text-center p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-brand-primary mb-3">Share Your Memories</h2>
          <p className="text-gray-700 mb-4">
            Have photos from our events you'd like to share? We'd love to feature them in our gallery!
          </p>
          <p className="text-sm text-gray-500">
            Contact us to submit your photos and help us grow our community archive.
          </p>
        </section>
        {/* End Call to Action */}
      </div>
    </main>
  );
} 