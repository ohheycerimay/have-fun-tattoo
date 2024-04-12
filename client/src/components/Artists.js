// Artists.js
import React from 'react';
import { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';

function Artists({user}) {
  const [artists, setArtists] = useState(null)

  useEffect(() => {
    fetch('/artists')
    .then(r => r.json())
    .then(setArtists)
  }, [])

  const renderedArtists = artists.map(artist => <ArtistCard artist={artist} user={user} />)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderedArtists}
        </div>
      </div>
    </section>
  );
}

export default Artists;
