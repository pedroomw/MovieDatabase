async function mostrarPelicula(id){
    console.log(id)
    try{
    const res = await fetch(`http://www.omdbapi.com/?i=${id}&&apikey=f2885c6e`) 
    const obj = await res.json()
    loader.style.display = "none"
    
    if(obj != null)
    {
        let tipo = obj.Type[0].toUpperCase() + obj.Type.slice(1)
        document.getElementById("listaObj").innerHTML = `<h1>${obj.Title}</h1><h2>${obj.Year}</h2><h3>${tipo}</h3><p>${obj.Plot}</p><h2>${obj.Actors}</h2><img src = "${obj.Poster}"></img>`
    } else {
        document.getElementById("listaObj").innerHTML = "Pelicula/Serie no encontrada"
    }

    }
    catch (error) {
        console.error('Error', error)
        loader.style.display = "block"
        loader.innerHTML = "Pelicula/serie no encontrada"
    }
}