import React from 'react'
import { Link } from 'react-router-dom'

const maxCharToDisplay=45
let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


let getTitle = (note) => {
     
    
    const title= note.body.split('\n')[0]
    if(title.length > maxCharToDisplay){
        return title.slice(0,maxCharToDisplay)
    }
    return title
}

let getContent =(note) =>{

    let title= getTitle(note)
    let content= note.body.replaceAll('\n','')
    content= content.replaceAll(title,'')

    if(content.length > maxCharToDisplay){
        return content.slice(0,maxCharToDisplay) + '...'
 
    } else{
        return content
    }
}
const ListItem = ({note}) => {

    return (
        <Link to= {`/note/${note.id}`}>
        <div className="notes-list-item">
            <h3>{getTitle(note)}</h3>
            <p><span>{getTime(note)}</span>, <span>{new Date(note.updated).toLocaleString('en-us', {weekday:'long'})}</span>{getContent(note)}</p>
        </div>
        </Link>
    )
}

export default ListItem
