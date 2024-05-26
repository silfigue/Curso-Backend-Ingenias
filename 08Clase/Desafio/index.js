const express = require('express');
const productos = require('./productos'); 
const app = express();
const PORT = 3000;

function getAllProductos() {
    return productos ? productos.sort((a, b) => a.nombre.localeCompare(b.nombre)) :
        { id: 'Error', descripcion: 'No se encontraron coincidencias.' }
}

app.get('/api/productos', (req, res) => { 
    res.json(getAllProductos());
})

// Ruta para obtener un producto por ID
app.get('/api/productos/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

// Ruta para obtener productos por nombre (completo o parcial)
app.get('/api/productos/nombre/:nombre', (req, res) => {
    const nombre = req.params.nombre.toLowerCase();
    const resultados = productos.filter(p => p.nombre.toLowerCase().includes(nombre));
    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).json({ error: 'No se encontraron productos con ese nombre' });
    }
});

//Ruta para obtener productos por categoria (completo o parcial)
app.get('/api/productos/categoria/:categoria', (req, res) => {
    const categoria = req.params.categoria.trim().toLowerCase(); // saco espacios y convierto en minuscula 
    const resultados = productos.filter(p => p.categoria.toLowerCase().includes(categoria)); // filtro por categoria
    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).json({ error: 'No se encontraron productos en esa categoria' });
    }
});

app.get('*', (req, res) => {
    res.status(403).send("Lo siento no es una ruta de mi proyecto! Ruta con get * ")
})
app.listen(PORT, () => console.log(`Node.js web server at port http://localhost:${PORT} is running..`));