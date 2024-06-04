const express =require('express');
const router = express.Router(); // Control de las rutas
const con = require('./Config/Conexion');

router.get('/estudiante/list',(req, res)=>{
    con.query('SELECT * FROM estudiante', (error, result) => {
        if(error){
            throw error;
        }else{
            res.render('list',{ estudiante: result });
        }
    });
});

router.get('/estudiante/insert',(req, res)=>{
    res.render('insert');
    });

    router.get('/API',(req, res)=>{
        const id = req.params.id;
        con.query('SELECT * FROM estudiante', (error, result) => {
            if(error){
                throw error;
            }else{
                res.send(result);
            }
        });
    });

router.get('/API/:id',(req, res)=>{
    const id = req.params.id;
    con.query('SELECT * FROM estudiante WHERE id=?',[id], (error, result) => {
        if(error){
            throw error;
        }else{
            res.send(result);
        }
    });
});

router.get('/estudiante/edit/:id', (req, res)=>{
    const id = req.params.id;
    con.query('SELECT * FROM estudiante WHERE id=?',[id], (error, result) =>{
        if(error){
            throw error;
        }else{
            //console.log(result);
            res.render('edit', {estudiante:result[0]});
        }
    });
});

router.get('/estudiante/delete/:id', (req, res)=>{
    const id = req.params.id;
    con.query('DELETE FROM estudiante WHERE id=?',[id], (error, result) =>{
        if(error){
            throw error;
        }else{
            //console.log(result);
            res.redirect('/estudiante/list');
        }
    });
});

const estudiante = require ('./Controllers/Estudiante.js');

router.post('/estudiante/insert', estudiante.insert);
router.post('/estudiante/update', estudiante.update);

module.exports = router;