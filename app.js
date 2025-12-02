const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 
app.get('/info', (req, res) => {

    const fechaActual = new Date();
    const fechaRegistro = fechaActual.toISOString()
        .replace("T", " ")
        .slice(0, 23);

    const horaRegistro = fechaActual.getTime(); 
    res.json({
        mensaje: "Información obtenida correctamente",
        datos: {
            servicios: "proyecto backend",
            version: 1.11,
            entorno: "produccion",
            estado: "Servicio funcionando correctamente",
            fechaRegistro,
            horaRegistro
        }
    });
});


app.post('/datos', (req, res) => {

    const { nombre, correo, edad } = req.body;

 

    const fechaActual = new Date();
    const fechaRegistro = fechaActual.toISOString()
        .replace("T", " ")
        .slice(0, 23);

    const horaRegistro = fechaActual.getTime(); 

    res.json({
        mensaje: "Datos recibidos exitosamente",
        datosRecibidos: {
            nombre,
            correo,
            edad
        },
        fechaRegistro,
        horaRegistro
    });
});


app.put('/datos/:id', (req, res) => {

    const idUsuario = req.params.id;
    const { nombre, correo } = req.body;

    const fechaActual = new Date();
    const fechaActualizacion = fechaActual.toISOString()
        .replace("T", " ")
        .slice(0, 23);

    const horaActualizacion = fechaActual.getTime();

    res.json({
        mensaje: "Datos actualizados exitosamente",
        idUsuario,
        datosActualizados: {
            nombre,
            correo
        },
        fechaActualizacion,
        horaActualizacion
    });
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});


