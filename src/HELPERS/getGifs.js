export const getGifs = async (categoria) => {

    //encodeURI sirve para reemplazar los espacios en un string para codificarlo para una petición
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=4&api_key=qNQwqyD2zE6yGbHCqvr9JpAaGvMiTNWQ`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json()
    
    const gifs = data.map(json => {
        return {
            id: json.id,
            title:json.title,
            url: json.images?.downsized_medium.url
        }
    })

    return gifs
}  