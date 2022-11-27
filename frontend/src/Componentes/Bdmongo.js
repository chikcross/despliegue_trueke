import { useState } from "react"
import Articulos from "./Articulos"
//import Cargar from "./Cargar"

const Bdmongo=()=>{

    const [todo,settodo]=useState([])

    const var_datos=()=>{
        fetch('http://localhost:5000/servicios/todo')
            .then(res=>res.json())
            .then(datos2=>settodo(datos2))
    }

    var_datos()
    let mostrar = todo.map((dato)=>{
        return(
            <Articulos nombre={dato.nombre} descripcion={dato.descripcion} cantidad= {dato.cantidad} imagen={dato.imagen} valor={dato.valor} usuario={dato.usuario} id={String(dato._id)}/>     
        );

    })  

    // var_datos()
    // //console.log(todo)

    return (
        <div className="row">
            {mostrar}
        </div>
    //     <div>
            
    //         {todo.map(dato=>{
    //             return(
    //                 <Articulos nombre={dato.nombre} descripcion={dato.descripcion} cantidad= {dato.cantidad} imagen={dato.imagen} valor={dato.valor} usuario={dato.usuario}/>
    //                 // <article className="coaster-card">
    //                 //     <h1>{eachtodos.nombre}</h1>
    //                 // </article>
    //             )
    //         })}
    //     </div>
    )
}

export default Bdmongo