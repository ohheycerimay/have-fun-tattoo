// Artists.js
import React from 'react';
import { useState, useEffect } from 'react';
import ArtistCard from './ArtistCard';

function Artists({user}) {
  const [artists, setArtists] = useState(null)
  const [formData, setFormData] = useState({
      name: '',
      bio: '',
      insta: null
  })

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  useEffect(() => {
    fetch('/artists')
    .then(r => r.json())
    .then(setArtists)
  }, [])

  const renderedArtists = artists?.map(artist => <ArtistCard key={artist.id} artist={artist} user={user} />)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Artists</h2>

        {user? 
          <>
            <button className="btn" onClick={()=>document.getElementById('add_artist_modal').showModal()}>Add Artist</button>
            <dialog id="add_artist_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Add Artist</h3>
                <form method="dialog" onSubmit={handleSubmit}>
                  <label for='artist_name'>Artist Name: </label>
                  <input id='artist_name' name='name' value={formData.name} onChange={handleInput}/>
                  <br />
                  <label for='artist_bio'>Bio: </label>
                  <textarea id='artist_bio' name='bio' value={formData.bio} onChange={handleInput}/>
                  <br />
                  <label for='artist_insta'>Instagram Handle (w/o @): </label>
                  <input id='artist_insta' name='insta' value={formData.insta} onChange={handleInput} />
                  <br />
                  <button type='submit'>Submit</button>
                </form>
                <p className="py-4">Press ESC to close</p>
              </div>
            </dialog>
          </>
        : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderedArtists}
        </div>
      </div>
    </section>
  );
}

export default Artists;
