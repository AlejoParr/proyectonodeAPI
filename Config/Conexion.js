
const mysql = require('mysql'); // Trae la librería MySQL

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectonode'
});

con.connect((error)=> {
    if (error){
        console.error("Error en la conexión a base de datos:"+error);
        return
}
    console.log("Conexión a base de datos establecida");
});

module.exports = con; // Si no se exporta, no se puede usar en otro archivo.