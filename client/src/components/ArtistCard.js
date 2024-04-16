// ArtistCard.js
import React from 'react';

function ArtistCard({ name, imageUrl }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={name} className="w-full rounded-lg" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        
      </div>
    </div>
  );
}

export default ArtistCard;
