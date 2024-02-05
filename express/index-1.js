const express = require('express');

const app = express();

app.get('/home/:x', (req, res) => {
  // obtiene el parámetro x
  res.end(`El parámetro x es ${req.params.x}`);
});


app.get('/usuario/:id', (req, res) => {
  res.end(`El valor del id de usuario es ${req.params.id}`);
});


app.get('/equipo/:idEquipo/jugador/:idJugador', (req, res) => {
  res.end(`El valor del id del equipo es ${req.params.idEquipo} y el id ${req.params.idJugador} es el del jugador`);
});

app.get('/hola-mundo', (req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head>
        <title>Hola mundo</title>
      </head>
      <body>
      </body>
    </html>
  `);
});

app.listen(8080);
