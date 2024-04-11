// Artists.js
import React from 'react';
import ArtistCard from './ArtistCard';

function Artists() {
  return (
    <section className="py-16 bg-green-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ArtistCard name="Artist 1" imageUrl="artist1.jpg" />
          <ArtistCard name="Artist 2" imageUrl="artist2.jpg" />
          {/* Add more ArtistCard components as needed */}
        </div>
      </div>
    </section>
  );
}

export default Artists;
