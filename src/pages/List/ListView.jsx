import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function ListView() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("/api/notes")
      .then(res => res.json())
      .then(data => setNotes(data.notes))
  }, [])

  const noteElements = notes.map(note => (
    <div key={note.id} className="note-tile">
      <Link to={`/notes/${note.id}`}>
        <div className="note-info list-info">
          <div className='list-image'>
            <img src={note.imageUrl} />
          </div>
          <div className='list-info-detail'>
            <h3>{note.name}</h3>
            <span>{note.author}</span>
          </div>

        </div>
        {/* <i className={`note-type ${note.type} selected`}>{note.type}</i> */}
      </Link>
    </div>
  ))

  return (
    <div className='list'>
      <div className="list-title">
        <h2>Your book notes</h2>
      </div>
      <div className='list-links'>
        {noteElements}
      </div>
    </div>
  );
}
