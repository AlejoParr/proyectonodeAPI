const express = require('express'); //Importa express
const app = express(); //Hace el llamado de express para poder ejecutar la conexión

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app .use('/', require('./Routes')); //Trae el archivo de rutas

app.listen(10000, ()=> { //Ejecución del puerto 10000
    console.log("App está ejecutándose");
});