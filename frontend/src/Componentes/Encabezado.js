import React, { Component } from "react";

class Encabezado extends Component {
    render() {
        return (
            <div >
                <img className="mx-auto d-block mb-3 mat-auto" src={process.env.PUBLIC_URL+"./Recursos/trueke1.png"} height="200" width="auto"/>

            </div>
        );
    }
}

export default Encabezado;