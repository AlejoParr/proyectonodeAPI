const con = require('../Config/Conexion');

exports.insert = (req, res)=>{ // Esta función captura la información de la vista y la envía a la BD
    const nombre = req.body.nombre;
    const genero = req.body.genero;
    const foto = req.body.foto;

    con.query('INSERT INTO estudiante SET ?', {nombre:nombre, genero:genero, foto:foto},
    (error, result)=>{
    if(error){
        console.log("Error en INSERT: "+error)
    }else{
        res.redirect('/estudiante/list')
    }
    })
}

    exports.update = (req, res) => { // Esta función captura la información de la vista y la envía a la BD para actualizar
        const id = req.body.id;
        const nombre = req.body.nombre;
        const genero = req.body.genero;
        const foto = req.body.foto;

        con.query('UPDATE estudiante SET ? WHERE ID = ?', [{nombre:nombre, genero:genero, foto:foto},id], (error, result)=>{
        if(error){
            console.log("Error en UPDATE: "+error)
        }else{
            res.redirect('/estudiante/list')
        }
        })
    }


