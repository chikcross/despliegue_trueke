const express = require('express')

const rutas_usr=express.Router()

const Esquema=require('../Modelos/bd_usuarios')





rutas_usr.post('/nuevo',(req,res)=>{
    let body=req.body
    let guardar=new Esquema({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        ciudad:body.ciudad,        
        usuario:body.usuario,
        cont:body.cont
    })
    guardar.save((err,guardadodb)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(guardadodb)
        }

    })
    
    
    //res.jason({body})

})

rutas_usr.get('/todo',(req,res)=>{
    Esquema
        .find({})
        .then(datos=>res.json(datos))
})

rutas_usr.post('/actualizar',(req,res)=>{
    let body =req.body
    Esquema.updateOne({nombre:body.nombre},{
        $set:{
            edad:body.edad,
            cont:body.cont
        }

    },function(error,info){
        if(error){
            res.send(error)

        }
        else{
            res.json(info)
        }
    })

})

rutas_usr.get('/borrar/:id',(req,res)=>{
    let {id}=req.params
    Esquema
        .findByIdAndDelete(id)
        .then(res.send("<h1>Documento Borrado</h1>"))
})

module.exports=rutas_usr