const mongoose = require('mongoose')

let esquema= mongoose.Schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    ciudad:String,
    usuario:String,
    cont:String
    
})

let Esquema_usr= mongoose.model("usuarios",esquema)

module.exports=Esquema_usr