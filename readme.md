Endpoint utilizado: "https://pokeapi.co/api/v2/pokemon/"

Las dificultades atravesadas fueron:
-Pasar el url de la imagen a una imagen visible: Decidimos editar el src del elemento html, y usar el mismo elemento para la imagen de error y el sprite del Pokemon.
-Mostrar todos los tipos de un pokemon con más de uno: Decidimos hacer un for para recorrer la lista de tipos proporcionada por la API y concatenarlas a un string.
-Mostrar el ícono de cargando: Decidimos alterar el display de un elemento que inicialmente esta escondido, y cuando se ejecuta el string se muestra, hasta volver a desaparecer en caso de que el try funcione correctamente. En el caso contrario, volverá a display:block y se alterará su contenido para mostrar "Error". También se alterara el source del elemento de imagen que utiliza la pagina para mostrar una imagen de error 404.
