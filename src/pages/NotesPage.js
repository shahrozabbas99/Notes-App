import React, {useState, useEffect} from 'react'
//import notes from '../assets/data';
import ListItem from '../components/ListItem'
import {Link} from 'react-router-dom'
import Add from '../assets/add.svg'

const NotesPage = () => {

    let [notes, setNotes]= useState([])

    useEffect(() =>{
        getNotes()
    },[])

    let getNotes = async () =>{
        let response = await fetch('http://127.0.0.1:5000/notes')
        let data = await response.json()

        setNotes(data)
    }

    return (
        <div className="notes"> 

            <div className="notes=header">
                <h2 className="notes-title"> &#9782; Notes</h2>
                <p className="notes-count"> {notes.length}</p>
            </div>
            

            <div className="notes-list">
            {notes.map((note, index) => (
                <ListItem key={index} note={note} />
            ))}
            </div>
            <Link to="/note/new" className='floating-button'>
                        <img src={Add} alt="add" />
                    </Link>
        </div>
    )
}

export default NotesPage
