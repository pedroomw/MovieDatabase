async function buscarPorNombre(){
    const loader =  document.getElementById("loader")
    loader.style.display = "block"
    
    try{
    const res = await fetch(`http://www.omdbapi.com/?s=${document.getElementById("nombre").value}&apikey=f2885c6e`) 
    const obj = await res.json()
    loader.style.display = "none"

    const search = obj.Search
    let html = ""
    for(let i = 0; i < search.length; i++){
        html += `<div><h2>${search[i].Title}</h2><h2>${search[i].Year}</h2><h4>${search[i].Year}</h4><button onClick = "mostrarPelicula" type = "button">Expandir</button></div>`
    }
    
    if(html == "")
    {
        document.getElementById("listaObj").innerHTML = "<h1>Error al cargar búsqueda</h1>"
    } else {
        document.getElementById("listaObj").innerHTML = html
    }

    }
    catch (error) {
        console.error('Error', error)
        loader.style.display = "block"
        loader.innerHTML = "Error"
        document.getElementById("imagen").src = "https://cdn-icons-png.flaticon.com/512/103/103085.png"
    }

}

