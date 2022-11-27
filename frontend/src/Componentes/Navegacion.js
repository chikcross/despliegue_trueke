import React, { Component } from "react";
//import App from "../App";
import Cargar from "./Cargar";
import Formulario from "./Formulario";
import Inicio_sesion from "./Inicio_sesion";
import Crear_usuario from "./Crear_usuario";
import Bdmongo from "./Bdmongo";





class Navegacion extends Component {
    render() {
        return (
            <div className="bg-dark" >
                <div >
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link active text-white" id="enlace1" data-bs-toggle="pill" data-bs-target="#v-pills-home " type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">{this.props.enlace1}</button>
                            <button class="nav-link text-white" id="enlace2" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">{this.props.enlace2}</button>
                            {/* <button class="nav-link text-white" id="enlace3" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">{this.props.enlace3}</button> */}
                            {/* <button class="nav-link text-white" id="enlace4" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">{this.props.enlace4}</button> */}
                            {/* <button class="nav-link text-white" id="enlace5" data-bs-toggle="pill" data-bs-target="#editar" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Editar Artículo</button> */}


                        </div>
                        {/* <form class="d-flex " role="Buscar">
                            <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar" />
                            <button class="btn btn-outline-primary text-white border-white" type="submit">Buscar</button>
                        </form> */}
                        <div className="Text-primary text-white ms-5 mt -2">
                            Esta es una página en la cual puedes publicar he intercambiar tus images con otros usuarios de la plataforma.
                        </div>
                        

                    </div>

                    <div class="tab-content " id="v-pills-tabContent ">
                        <div class="tab-pane fade show active text-white " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                            {/* <App /> */}
                            <Cargar/>
                            <Bdmongo/>

                        </div>
                        <div class="tab-pane fade text-white" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <Formulario/>
                        </div>
                        <div class="tab-pane fade text-white" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                            <Inicio_sesion/>
                        </div>
                        <div class="tab-pane fade text-white" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                            <Crear_usuario/>
                        </div>
                        {/* <div class="tab-pane fade text-white" id="editar" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <Formulario/>
                        </div> */}
                        {/* <div class="tab-pane fade text-white" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                            Enlace5
                        </div> */}
                       
               
                
                   
                    </div>
                </div>

            </div>

        );
    }

}

export default Navegacion;