// Artists.js
import React from 'react';
import { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';

function Artists({user}) {
  // const [artists, setArtists] = useState(null)

  // useEffect(() => {
  //   fetch('/artists')
  //   .then(r => r.json())
  //   .then(setArtists)
  // }, [])

  return (
    <section className="mt-16 py-16 bg-green-300 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ArtistCard name="Artist 1" imageUrl="artist1.jpg" user={user} />
        </div>
      </div>
    </section>
  );
}

export default Artists;
