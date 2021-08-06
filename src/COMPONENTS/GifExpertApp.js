import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GiftCollection from './GiftCollection'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Drama'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/> 
            <hr />

            <ol>
                {
                    categorias.map((categoria) => 
                        <GiftCollection 
                            key={categoria} 
                            categoria={categoria}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
