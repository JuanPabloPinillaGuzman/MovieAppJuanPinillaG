function buscarPelicula() {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        realizarBusqueda(query)
            .then(resultado => {
                if (resultado.length > 0) {
                    alert(`Películas encontradas: ${resultado.map(p => p.nombre).join(', ')}`);
                } else {
                    alert('No se encontraron películas con ese término.');
                }
            })
            .catch(error => {
                console.error('Error al realizar la búsqueda:', error);
                alert('Ocurrió un error durante la búsqueda. Por favor, inténtalo de nuevo.');
            });
    } else {
        alert('Por favor, ingresa un término de búsqueda.');
    }
}

function realizarBusqueda(query) {
    return new Promise((resolve) => {
        const resultado = peliculas.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(query.toLowerCase())
        );
        setTimeout(() => resolve(resultado), 1000);
    });
}
