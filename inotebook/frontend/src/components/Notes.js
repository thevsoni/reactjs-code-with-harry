import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote'



function Notes() {

    const context = useContext(noteContext);
    const { notes, getNotes } = context;

    useEffect(() => {
        getNotes();
    }, [])
    //doubt it is happening bcs i am calling this func later so why it prints my current adding notes
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>your notes</h2>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />
                    })
                }

            </div>
        </>

    )
}

export default Notes