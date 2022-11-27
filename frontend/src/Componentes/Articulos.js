import React, { Component } from "react";
//import img1 from "./img1.png";
import axios from "axios";
//import Formulario from "./Formulario";
//import { Link } from "react-router-dom";
//import Editar from "./Editar";
class Articulos extends Component {

    constructor() {
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            usuario: "",
            cantidad: 0,
            valor: "",
            imagen: "",
            id: "",
            mensaje: "",
            usuario_c: ""
        }

        this.eliminar = this.eliminar.bind(this)
        this.cambio = this.cambio.bind(this)
        this.editar = this.editar.bind(this)
        this.inicial = this.inicial.bind(this)
        this.intercambiar = this.intercambiar.bind(this)
    }
    editar(e) {
        this.setState({
            id: e.target.name
        })

        axios.post("http://localhost:5000/servicios/actualizar2", this.state)
    }

    intercambiar(e) {
        this.setState({
            id: e.target.name
        })
        console.log(this.state);
        axios.post("http://localhost:5000/servicios/intercambiar", this.state)
    }

    eliminar(e) {
        let direccion = "http://localhost:5000/servicios/borrar/" + e.target.name
        axios.get(direccion)
            .then(dato => alert("El artículo " + e.target.name + "ha sido borrado con éxito"))

    }

    cambio(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    inicial() {
        this.setState({
            nombre: this.props.nombre,
            descripcion: this.props.descripcion
        })
    }

    render() {

        return (
            // Tarjetas
            <div className="col-sm-4 text-center">

                <div className="card mt-4 bg-dark b border-white">
                    <img height="250" width="auto" src={this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className="">Valor: {this.props.valor}</span>
                        <br />
                        <span className="bg-success pill">Usuario: {this.props.usuario}</span>
                        <br />
                        <span className="bg-primary pill">Cantidad: {this.props.cantidad}</span>
                        <br />

                        <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro" + this.props.id}>Editar</button>
                        <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
                        {/* <button className="btn btn-success border mx-auto mt-1" data-bs-toggle="modal" data-bs-target={"#intercambiar" + this.props.id}>Intercambiar</button> */}
                    </div>
                </div>



                {/* Eliminar */}
                <div className="modal fade" id={"articulo" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-dark">
                            ⚠ Desea eliminar el artículo "{this.props.nombre}" a nombre de "{this.props.usuario}" ⚠ ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark " data-bs-dismiss="modal">No</button>
                                <button type="button" className="btn btn-danger " onClick={this.eliminar} name={this.props.id}>Si </button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Editar */}
                <div className="modal fade" id={"editar_cuadro" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar Articulo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className="text-dark">{this.props.id}</p>
                                <form>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Articulo</label>
                                        <input type="text" className="form-control" id="recipient-name" name="nombre" defaultValue={this.props.nombre} onChange={this.cambio} />
                                    </div>;
                                    <div className="mb-1">
                                        <label for="message-text" className="col-form-label text-dark text-st" >Descripción</label>
                                        <textarea className="form-control" id="message-text" name="descripcion" defaultValue={this.props.descripcion} onChange={this.cambio}></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start" >Cantidad</label>
                                        <input type="number" className="form-control" id="recipient-name" name="cantidad" defaultValue={this.props.cantidad} onChange={this.cambio} />
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start">Imagen</label>
                                        <input type="text" className="form-control" id="recipient-name" name="imagen" defaultValue={this.props.imagen} onChange={this.cambio} />
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name" className="col-form-label text-dark text-start" >Valor</label>
                                        <div className="form-group">
                                            <select name="valor" className="form-control" text={this.props.valor} onChange={this.cambio}>
                                                <option>Alto</option>
                                                <option>Medio</option>
                                                <option>Bajo</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-info" name={this.props.id} onClick={this.editar}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Intercambiar */}
                <div className="modal fade" id={"intercambiar" + this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content bg-dark">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Intercambiar</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Usuario:</label>
                                        <input type="text" className="form-control" id="recipient-name" name="usuario_c" onChange={this.cambio} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message-text" className="col-form-label">Mensaje:</label>
                                        <textarea className="form-control" id="message-text" name="mensaje" onChange={this.cambio}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" name={this.props.id} onClick={this.intercambiar}>Intercambiar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>);

    }
}

export default Articulos;