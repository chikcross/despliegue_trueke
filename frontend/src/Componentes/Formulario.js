import React, { Component } from "react";
import axios from "axios";

class Formulario extends Component {
    constructor(){
        super();
        this.state ={
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad:0,
            valor:"Alto",
            imagen:""

        }
        this.cambio = this.cambio.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value

        })
        console.log(this.state);        

    }
    guardar(){
        //alert("Guardando...")
        axios.post('http://localhost:5000/servicios/nuevo',this.state)
            .then(console.log("Creado"))
        alert('Artículo creado')
        this.setState({nombre:""})
        document.getElementById("nombre").value=""
        document.getElementById("descripcion").value=""
        document.getElementById("cantidad").value=""
        document.getElementById("imagen").value=""
        document.getElementById("usuario").value=""

        

    }

    render(){
        return (
            <div className="card w-50 m-auto bg-dark mt-4 border-white ">
                <h1 className="m-auto text-white">Nueva Tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre Artículo" name="nombre" onChange={this.cambio} className="form-control" id="nombre"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripción Artículo" name="descripcion" className="form-control mt-3"onChange={this.cambio} id="descripcion"/>
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad" name="cantidad" className="form-control mt-3"onChange={this.cambio} id="cantidad"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Usuario" name="usuario" className="form-control mt-3"onChange={this.cambio} id="usuario"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Artículo " name="imagen" className="form-control mt-3"onChange={this.cambio} id="imagen"/>
                    </div>
                    <h5 className="text-white mt-2 text-center">Valor</h5>
                    <div className="form-group">
                        <select name="valor" className="form-control mt-3 "onChange={this.cambio}>
                            <option>Alto</option>
                            <option>Media</option>
                            <option>Bajo</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear</button>
                    </div>                  
                  
                </form>

            </div>

        );
    }
}

export default Formulario;