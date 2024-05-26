const fs = require('fs');

function leerTrailerflix() {

    let datos
    let trailerflix

    try {
        datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8');
        trailerflix = JSON.parse(datos);
    } catch (error) {
        console.error('Error al leer el archivo de datos:', error);
        return [];
    }

    // Convertir las cadenas de tags a array
    trailerflix.forEach((item) => {
        item.tags = item.tags.split(',').map(tag => tag.trim());
    });

    // Convertir las cadenas de reparto a array
    trailerflix.forEach((item) => {
        item.reparto = item.reparto.split(',').map(actor => actor.trim());
    });

    return trailerflix;
}

// Función para buscar el trailer de una película o serie por su id. 
// Si no se encuentra devuelve un mensaje en formato JSON notificando la no disponibilidad del mismo.
function obtenerTrailerPorId(id, DB) {
    const trailer = DB.find((item) => item.id === id);

    if (trailer) {
        return {
            id: trailer.id,
            titulo: trailer.titulo,
            trailer: trailer?.trailer || 'No disponible'
        };
    } else {
        return { mensaje: `No se encontraron resultados con el id ${id}` };
    }
}

const obtenerCategoria = (cat, DB)=>{
    const categoriasEncontradas = DB.filter(c => c.categoria.toLowerCase().includes(cat)); // filtro por categoria
    if (categoriasEncontradas.length > 0) {
        return categoriasEncontradas;
    } else {
        return { mensaje: `No se encontraron resultados para esa categoria.` };
    }
}

const obtenerTitulo = (title, DB) => {
    const titleEncontrado = DB.filter(n => n.titulo.toLowerCase().includes(title));
    if (titleEncontrado.length > 0) {
        return titleEncontrado;
    } else {
        return { mensaje: `No se encontraron resultados.` };
    }
}

const obtenerReparto = (param, DB) => {
    let result = DB.filter( item => 
        item.reparto.some(reparto => 
        reparto.toLowerCase().includes(param))).map(item => 
        ({
        titulo: item.titulo,
        reparto: item.reparto
    }));

    return result;
}

module.exports = { leerTrailerflix, obtenerTrailerPorId, obtenerTitulo, obtenerCategoria, obtenerReparto };
