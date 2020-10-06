import React from "react";
import "./Amount.css";
import {firebase} from "../../../firebase";
import moment from 'moment';

class Amount extends React.Component {
    constructor() {
        super();
        this.state = {
            ubicacion: null,
            amountOfPeople:"",
            amountSelected:"",
            id:"",
        };
        this.handleClickHelp = this.handleClickHelp.bind(this);
    }

    handleClickHelp = (e) => {
        e.preventDefault();
        this.props.history.push("/alerta");
      };

    //Recoge el valor del botón
    handleClickSelected(amountSelected){
        this.state.amountOfPeople=amountSelected;
        //console.log(this.state.amountOfPeople);
        localStorage.setItem("amountOfPeople",this.state.amountOfPeople);
    };


    addData = async (e) => {
        e.preventDefault()

        try {
          const db = firebase.firestore()

          //Crea la nueva alerta para la base de datos y le pasa los parámetros
          const newAlert = {
              latitude: localStorage.getItem("latitude"), /* /^(-?[1-8]?d(?:.d{1,18})?|90(?:.0{1,18})?)$/ */
              longitude: localStorage.getItem("longitude"), /* /^(-?(?:1[0-7]|[1-9])?d(?:.d{1,18})?|180(?:.0{1,18})?)$/ */
              typeOfAlert: localStorage.getItem("typeOfAlert"), 
              amountOfPeople: localStorage.getItem("amountOfPeople"),
              timestamp:parseInt(moment().format('X')),
              date:moment().format('lll')
          }

          //Limpia el localstorage
          const dbLength= localStorage.getItem("dbLength");
          const id= localStorage.getItem("dbLength");
          console.log(id);
          const data = await db.collection("alerts").doc(id).set(newAlert)
          const dbLengthClean = localStorage.removeItem("dbLength");
          const longitudeClean = localStorage.removeItem("longitude");
          const latitudeClean = localStorage.removeItem("latitude");
          const typeOfAlertClean = localStorage.removeItem("typeOfAlert");
          const amountOfPeopleClean = localStorage.removeItem("amountOfPeople");

        } catch (error){
            console.log(error)
        }
        this.props.history.push("/mapa")
      }

    render() {
        return (
            <div className="amount-page">
                <div className="back" onClick={this.handleClick}>
                    <img
                    onClick={this.handleClickHelp}
                        src="img/Amount/LeftArrow/Arrow.svg"
                        alt="logo"
                        srcSet="img/Amount/LeftArrow/Arrow@2x.png 2x, img/Amount/LeftArrow/Arrow@3x.png 3x"
                        className="back-img"
                    ></img>
                    <p className="back-label"> Nueva alerta </p>
                </div>

                <div className="type-alert">
                    <p className="type-alert-label"> Tipo de alerta </p>
                    <div className="imageContainer">
                        <div className="upper-block">
                                <div className="first-block-delete-circle">
                                    <img
                                        src="img/Amount/Delete/Delete.svg"
                                        alt="logo"
                                        srcSet="img/Amount/Delete/Delete@2x.png 2x, img/Amount/Delete/Delete@3x.png 3x"
                                        className="first-block-delete-img"
                                    ></img>
                                <p className="delete-label"> Cantidad de gente </p>
                            </div>        
                        </div>
                        <div className="sectionButtons">
                            <div className="amountContainer">
                                <button className="amount-btn" id="few"  onClick={(e) => this.handleClickSelected("Poca", e)}></button>
                                <p>Poca</p>
                            </div>
                            <div className="amountContainer">
                                <button className="amount-btn" id="lot"  onClick={(e) => this.handleClickSelected("Mucha ", e)}></button>
                                <p>Mucha</p>
                            </div>
                            <div className="amountContainer">
                                <button className="amount-btn" id="crowd" onClick={(e) => this.handleClickSelected("Aglomeracion", e)}></button>
                                <p>Aglomeración</p>
                            </div>
                        </div>
                    </div>
                    <div className="create-alert">
                        <form onSubmit={this.addData}>
                            <button className="create-alert-btn" type="submit">
                                <p className="create-alert-label">Crear alerta</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Amount;
