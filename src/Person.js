import React from 'react'

function Person(props){
    return (
        <div className="person-container">
        <h1 className='person'>{props.quoteAuthor}</h1>
        <span>{props.quoteGenre}</span>
        </div>
    )
}

export default Person; 