import React, { useEffect, useState } from 'react'
import GifCollectionItem from './GifCollectionItem';
import { getGifs } from '../HELPERS/getGifs'

const GiftCollection = ({categoria}) => {

    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        //Esto es lo mismo pero más largo:
        // getGifs(categoria).then(
        //     imagenes => setImagenes(imagenes)
        // )
        getGifs(categoria).then(setImagenes)

    },[categoria])

    return (
        <>
            <h3>{categoria}</h3>
            <div className="card-grid">
                {
                    imagenes.map(imagen => (<GifCollectionItem key={imagen.id} {...imagen}/>))
                }    
            </div>
        </>
    )
}

export default GiftCollection
