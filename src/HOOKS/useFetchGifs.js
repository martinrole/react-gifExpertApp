import { useState, useEffect } from "react"
import { getGifs } from "../HELPERS/getGifs"

export const useFetchGifs = (categoria) => {

    const [estado, setEstado] = useState({
        datos: [],
        cargando: true
    })

    useEffect(() => {
        getGifs(categoria).then( imagenes => {

            setTimeout(() => {
                //console.log(imagenes)
                setEstado({
                    datos:imagenes, 
                    cargando: false
                })
            },3000)

        })
    }, [categoria])


    return estado
}

