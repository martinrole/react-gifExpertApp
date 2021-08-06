import React from 'react'

const GifCollectionItem = ({id, url, title}) => {

    return (
        <div className="card animate__animated animate__backInDown">
           <img src={url} alt={title}/>
           <p>{title}</p>
        </div>
    )
}

export default GifCollectionItem
