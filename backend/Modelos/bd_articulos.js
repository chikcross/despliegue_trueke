const mongoose = require('mongoose')

let esquema= mongoose.Schema({
    nombre:String,
    descripcion:String,
    cantidad:Number,
    imagen:String,
    valor:String,
    usuario:String
    
})

let Esquema= mongoose.model("datos",esquema)

module.exports=Esquema