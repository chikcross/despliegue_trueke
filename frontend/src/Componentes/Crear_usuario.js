import React, { Component } from "react";
import axios from "axios";

class Crear_usuario extends Component {
    constructor(){
        super();
        this.state ={
            nombres:"",
            apellidos:"",
            usuario:"",
            edad:0,
            ciudad:"Medellín",
            cont:"",
            cont2:"",

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
        axios.post('http://localhost:5000/usuarios/nuevo',this.state)
        .then(console.log("Creado"))
    alert('Usuario creado')
    this.setState({nombre:""})
    document.getElementById("nombres").value=""
    document.getElementById("apellidos").value=""
    document.getElementById("edad").value=""
    document.getElementById("cont").value=""
    document.getElementById("cont2").value=""
    document.getElementById("usuario").value=""

    }

    render(){
        return (
            <div className="card w-50 m-auto bg-dark mt-4 border-white ">
                <h1 className="m-auto text-white">Nueva Usuario</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" id="nombres" placeholder="Nombres" name="nombres" onChange={this.cambio} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="apllidos" placeholder="Apellidos" name="apellidos" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="number" id="edad" placeholder="Edad" name="edad" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    
                    
                    <h5 className="text-white mt-2 text-center">Ciudad</h5>
                    <div className="form-group">
                        <select name="valor" className="form-control mt-3 "onChange={this.cambio}>
                            <option>Bogotá</option>
                            <option>Medellín</option>
                            <option>Barranquilla</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="email" id="usuario" placeholder="Correo" name="usuario" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="cont" placeholder="Contraseña " name="cont" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="cont2" placeholder="Repetir Contraseña " name="cont2" className="form-control mt-3"onChange={this.cambio}/>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear</button>
                    </div>                  
                  
                </form>

            </div>

        );
    }
}

export default Crear_usuario;