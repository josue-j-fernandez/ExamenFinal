const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET
app.get('/estado', (req, res) => {
    res.send('Funciona');
});

// POST
app.post('/data', (req, res) => {  
    const data = req.body;
    res.json({
        mensaje: "Resibido",
        dataRecibida: {
            producto: data.producto,
            numero: data.numero,
            otro: data.otro,
            operacion: data.numero + data.numero + data.otro
        }
    });
});

// PUT
app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    res.json({
        mensaje: "Actulizado",
        dataRecibida: {
            dataAct: data
        }
    });
});

// PATCH
app.patch('/data/:id', (req, res) => {
    const id = req.params.id;
    const cambios = req.body;

    res.json({
        mensaje: "Actualización parcial realizada",
        id: id,
        cambiosAplicados: cambios
    });
});

// DELETE
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        mensaje: "Eliminado correctamente",
        idEliminado: id
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.post('/verificar-edad', (req, res) => {
    const { nombre, edad } = req.body;

    if (!nombre || !edad) {
        return res.status(400).json({
            mensaje: "Faltan datos: nombre y edad son obligatorios"
        });
    }
  
    const esPar = edad % 2 === 0;

    res.json({
        mensaje: "Datos procesados correctamente",
        datos: {
            nombre,
            edad,
            resultado: esPar ? "La edad es par" : "La edad es impar"
        }
    });
});


app.post('/edad', (req, res) => {
    const data = req.body;

    const nombre = data.nombre;
    const edad = data.edad;

    let resultado = "";
    if (!edad) {
        resultado = "Edad no proporcionada";
    } else {
        resultado = (edad % 2 === 0) ? "La edad es par" : "La edad es impar";
    }

    res.json({
        mensaje: "Recibido",
        dataRecibida: {
            nombre: nombre,
            edad: edad,
            resultado: resultado
        }
    });
});