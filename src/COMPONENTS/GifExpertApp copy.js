import React, { useState } from 'react'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Acción','Comedia','Drama'])

    const handleAdd = () => {
        setCategorias([...categorias,'Documental']);
        //setCategorias(categorias => [...categorias,'Documental'])  Otra forma de hacerlo con Callbacks
    }

    return (
        <>
            <h2>GifExpertApp</h2> 
            <button onClick={handleAdd}>Agregar</button>
            <hr />

            <ol>
                {
                    categorias.map((categoria, index) => (
                        <li key={index}>{categoria}</li>
                    ))
                }
            </ol>
            <hr />

            <ol>
                {
                    categorias.map((categoria, index) => {
                        return <li key={index}>{categoria}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
