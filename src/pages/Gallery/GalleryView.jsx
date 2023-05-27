import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function GalleryView() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("/api/notes")
      .then(res => res.json())
      .then(data => setNotes(data.notes))
  }, [])

  const noteElements = notes.map(note => (
    <div key={note.id} className="note-tile">
      <Link to={`/notes/${note.id}`}>
        <img className="gallery-image" src={note.imageUrl} />
        <div className="note-info">
          <h3>{note.name}</h3>
          <span>{note.author}</span>
        </div>
        {/* <i className={`note-type ${note.type} selected`}>{note.type}</i> */}
      </Link>
    </div>
  ))

  return (
    <div className='gallery'>
      <div className="gallery-title">
        <h2>Your book notes</h2>
      </div>
      <div className='gallery-links'>
        {noteElements}
      </div>
    </div>
  );
}
