import React from 'react'
import { useFetchGifs } from '../HOOKS/useFetchGifs';
import GifCollectionItem from './GifCollectionItem';

const GiftCollection = ({categoria}) => {

    const { datos: imagenes, cargando} = useFetchGifs(categoria)

    return (
        <>
            <h3>{categoria}</h3>
            { cargando && <p className='animate__animated animate__flash'>Cargando...</p> }
            <div className='card-grid'>
                {
                    imagenes.map(imagen => (
                        <GifCollectionItem key={imagen.id} {...imagen}/>
                    ))
                }
            </div>
        </>
    )
}

export default GiftCollection
