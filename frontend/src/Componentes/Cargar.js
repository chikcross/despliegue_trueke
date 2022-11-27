import React, { Component } from "react";
import Datos from './Datos.json'
import Articulos from './Articulos';

class Cargar extends Component {
    constructor() {
        super();
        this.state = {Datos}
        console.log(this.state.Datos.length);
    }
    render() {
        let mostrar = this.state.Datos.map((dato)=>{
            return(
                <Articulos nombre={dato.nombre} descripcion={dato.descripcion} cantidad= {dato.cantidad} imagen={dato.imagen} valor={dato.valor} usuario={dato.usuario}/>
                  

             
            );

        })
        return (
            <div className="row">
                {/* {mostrar}
                <span className="badge badge-pill badge-light">
                    {this.state.Datos.length}


                </span> */}
            </div>
        );
    }

}

export default Cargar;