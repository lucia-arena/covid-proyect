import React from "react";
import "./AlertType.css";
import {firebase} from "../../../firebase";


class AlertType extends React.Component {
    constructor() {
        super();
        this.state = {
            ubicacion: null,
            typeOfAlert:"",
            alertSelected:"",
            
        };
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickCreate = this.handleClickCreate.bind(this)
        
     //Comprueba cuántos datos hay en la base de datos, para asignar el id al siguiente valor libre
        const db = firebase.firestore()
         db.collection('alerts').get().then(
           (snapshot) => localStorage.setItem("dbLength",snapshot.docs.length)
         );
         const id= localStorage.getItem("dbLength");
    }

    //Función para volver atrás
    handleClickBack = (e) => {
        e.preventDefault();
        console.log("pulse");
        this.props.history.push("/mapa");
    };

    //Controla que no se pase de pantalla si no se ha seleccionado una alerta
    handleClickCreate = (e) => {
        e.preventDefault();
        /* console.log("pulse"); */
        const typeOfAlert= localStorage.getItem("typeOfAlert");
        if(typeOfAlert==="Manifestacion"||typeOfAlert==="Evento"||typeOfAlert==="Obra"||typeOfAlert==="Otro"){this.props.history.push("/alerta-detalle")}
        else{alert("Debes seleccionar un tipo de alerta")}

    };

    //Selecciona el tipo de alerta, y lo guarda en el localstorage  
    handleClickSelected(alertSelected){
        this.state.typeOfAlert=alertSelected;
         console.log(this.state.typeOfAlert); 
        localStorage.setItem("typeOfAlert",this.state.typeOfAlert); 
    };


    render() {
        return (
            <div className="alerttype-page" >
                <div className="back-alert" onClick={this.handleClickBack}>
                    <img
                        src="img/AlertType/LeftArrow/Arrow.svg"
                        alt="logo"
                        srcSet="img/AlertType/LeftArrow/Arrow@2x.png 2x, img/AlertType/LeftArrow/Arrow@3x.png 3x"
                        className="back-alert-img"
                    ></img>
                    <p className="back-alert-label"> Nueva alerta </p>
                </div>

                <div className="type-alert">
                    <p className="type-alert-label"> Tipo de alerta </p>
                    <div className="alerts-block">
                        <div className="alertTypeContainer">
                            <button className="alertType-btn" id="manifestacion" onClick={(e) => this.handleClickSelected("Manifestacion", e)}></button>
                            <p className="alertType-label">Manifestación</p>
                        </div>
                        <div className="alertTypeContainer">
                            <button className="alertType-btn" id="evento" onClick={(e) => this.handleClickSelected("Evento", e)}></button>
                            <p className="alertType-label">Evento</p>
                        </div>
                        <div className="alertTypeContainer">
                            <button className="alertType-btn" id="obras" onClick={(e) => this.handleClickSelected("Obra", e)}></button>
                            <p className="alertType-label">Obras</p>
                        </div>
                        <div className="alertTypeContainer">
                            <button className="alertType-btn" id="otro" onClick={(e) => this.handleClickSelected("Otro", e)}></button>
                            <p className="alertType-label">Otro</p>
                        </div>
                    </div>
                    <div className="add-alert">
                        <button className="add-alert-btn" onClick={this.handleClickCreate}>
                        <p className="add-alert-label">Siguiente</p>
                    </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default AlertType