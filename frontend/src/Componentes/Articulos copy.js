import React, { Component } from 'react';
import axios from 'axios';
//import Formulario from './Formulario';
//import { link } from "react-router-dom";


class Articulos extends Component {
    constructor() {
        super();
        this.state = {
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad:0,
            valor:"",
            imagen:"",
            id:""


            //Support-Por si hay que hacer un paso atrás
            // btn1:
            //     <div>
            //         <button formTarget='#editar' className="btn btn-primary border mx-auto me-2 mt-1" onClick={this.editar}>Editar</button>
            //         <button className="btn btn-danger border mx-auto mt-1 " onClick={this.eliminar}>Eliminar</button>
            //     </div>,
            // btn2:
            //     <div>
            //         <button formTarget='#formulario1' className="btn btn-success border mx-auto mt-1" onClick={this.intercambiar}>Intermcambio</button>
            //     </div>
        }
        this.eliminar = this.eliminar.bind(this)
        this.cambio = this.cambio.bind(this)
        this.editar = this.editar.bind(this)
        this.inicial = this.inicial.bind(this)

    }

    editar(e) {
        this.setState({
            id:e.target.name
        })
        //alert(this.state);
        axios.post("http://localhost:5000/servicios/actualizar2/",this.state)
        //alert('Editando...');
    }

    intercambiar() {
        alert('Intercambiando...');
    }
    eliminar(e) {

        let direccion = "http://localhost:5000/servicios/borrar/" + e.target.name
        axios.get(direccion)
            .then(dato => alert("Borrado " + e.target.name))
            ;
        //alert('Eliminando...');
    }
    cambio(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    inicial(){
        this.setState({
            nombre: this.props.nombre,
            descripcion:this.props.descripcion
        })
    }

    


    // Support-Por si hay que hacer un paso atrás
    // botones(usuario) {
    //     if (usuario === 'Ramiro') {
    //         return this.state.btn1;            
    //     } else {
    //         return this.state.btn2;            
    //     }

    // }


    botones(usuario, id) {
        if (usuario == 'Ramiro') {
            // return (
            // <div>
            //     <button formTarget='#editar' className="btn btn-primary border mx-auto me-2 mt-1" onClick={this.editar}>Editar</button>
            //     <button formTarget={'#'+ id} className="btn btn-danger border mx-auto mt-1 " onClick={this.eliminar}>Eliminar</button>
            // </div>
            // )          
        } else {
            // return (
            //     <button formTarget='#formulario1' className="btn btn-success border mx-auto mt-1" onClick={this.intercambiar}>Intermcambio</button>
            // )
        }

    }

    render() {
        return (


            <div className="col-sm-4 text-center">
                {/* <div className="row row-cols-1 row-cols-md-3 g-4"*/}
                <div className="card mb- mt-4 bg-dark border-white ">
                    <img height="250" width="auto" src={process.env.PUBLIC_URL + this.props.imagen} className="card-img-top" alt={this.props.numero} />
                    <div class="card-body">
                        <h5 className="card-title">{this.props.nombre}</h5>
                        <p className="card-text">{this.props.descripcion}</p>
                        <span className='bg-danger rounded-pill'>Valor: {this.props.valor}</span>
                        <br />
                        <span className='bg-success rounded-pill'>Usuario: {this.props.usuario}</span>
                        <br />
                        <span className='bg-primary rounded-pill'>Cantidad: {this.props.cantidad} </span>
                        <br />

                        {/* Lo ultimo que se ha echo */}

                        <button className="btn btn-primary border mx-auto me-2 mt-1" data-bs-toggle="modal" data-bs-target={"#editar_cuadro"+ this.props.id}>Editar</button>
                        <button className="btn btn-danger border mx-auto mt-1 me-2" data-bs-toggle="modal" data-bs-target={"#articulo" + this.props.id}>Eliminar</button>
                        <button className="btn btn-success border mx-auto mt-1 " onClick={this.intercambiar}>intercambiar</button>

                        {/* Hasta acá */}



                        {this.botones(this.props.usuario)}


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
                                Desea eliminar el artículo {this.props.id}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-danger" onClick={this.eliminar} name={this.props.id}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="modal fade" id="formulario1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" >Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Editar */}


                <div className="modal fade" id={"editar_cuadro"+ this.props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Editar Artículo</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p className='text-dark'>{this.props.id}</p>
                                <form>
                                    <div className="mb-1">
                                        <label for="recipient-name " className="col-form-label text-dark">Artículo:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultValue={this.props.nombre} onChange={this.cambio} />
                                    </div>
                                    <div className="mb-1">
                                        <label for="message-text" className="col-form-label text-dark text-start" >Descripción:</label>
                                        <textarea className="form-control" id="message-text" defaultvalue={this.props.descripcion} onChange={this.cambio}></textarea>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name " className="col-form-label text-dark" >Cantidad:</label>
                                        <input type="number" className="form-control" id="recipient-name" defaultvalue={this.props.cantidad} onChange={this.cambio}/>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name " className="col-form-label text-dark " >Imagen:</label>
                                        <input type="text" className="form-control" id="recipient-name" defaultvalue={this.props.imagen} onChange={this.cambio}/>
                                    </div>
                                    <div className="mb-1">
                                        <label for="recipient-name " className="col-form-label text-dark" >Valor:</label>
                                        <div className="form-group">
                                            <select name="valor" className="form-control  "value={this.props.valor} onChange={this.cambio}>
                                                <option>Alta</option>
                                                <option>Media</option>
                                                <option>Baja</option>
                                            </select>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary"name={this.props.id} onClick={this.editar}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>);

    }

}

export default Articulos;