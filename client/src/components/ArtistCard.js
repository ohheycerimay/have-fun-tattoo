// ArtistCard.js
import React from 'react';

function ArtistCard({ name, imageUrl, user }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this artist?")) {
      console.log("OINK")
    }
  }

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={name} className="w-full rounded-lg" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        {/* Add additional information about the artist if needed */}
      </div>
      {user? <button onClick={handleDelete}>Delete</button> : null}
    </div>
  );
}

export default ArtistCard;
