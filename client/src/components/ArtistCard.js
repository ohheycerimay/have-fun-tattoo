// ArtistCard.js
import React from 'react';

function ArtistCard({ artist, user }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this artist?")) {
      fetch(`/artists/${artist.id}`, {method: 'DELETE'})
        .then(r => {
          if (r.ok) {
            window.location.reload()
          } else {}
            r.json().then(console.error)
        })
    }
  }

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
      {/* <img src={imageUrl} alt={name} className="w-full rounded-lg" /> */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{artist.name}</h3>
        <span>{artist.insta}</span>
        <p>{artist.bio}</p>
      </div>
      {user? <button onClick={handleDelete}>Delete</button> : null}
    </div>
  );
}

export default ArtistCard;
