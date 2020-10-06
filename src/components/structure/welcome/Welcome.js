import React from "react";
import "./Welcome.css";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      ubicacion: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = (e) => {
    e.preventDefault();
    //console.log("pulse");
    this.props.history.push("/mapa");
  };

  render() {
    return (
      <>
      <div className="welcome-page-s">
        <div className="titleContainer"><p className="title">Bienvenido a</p></div>
        <div className="substractContainer">
        <img src="img/dark.png" alt="logo" className="Subtract"></img>
        </div>
        <img src="img/Welcome/Group1.png"  alt="cartel" className="Size1"></img>
        <img src="img/Welcome/Group1@2x.png"  alt="cartel" className="Size2"></img>
        <div className="textContainer1">
        <div className="Welcome">
          <p className="WelcomeText">Una app que te permite</p><p className="WelcomeText"> desplazarte evitando</p> <p className="WelcomeText">aglomeraciones.</p></div>
        <div className="Aceptgeoloc"><p className="WelcomeText">Al dar al botón comenzar estás aceptando que Mappi</p> <p className="WelcomeText">utilice tu ubicación.</p></div>
        </div>
        <div className="textContainer2">
        <div className="Welcome">
          <div className="welcomehome">
          <p className="WelcomeText">Una app que te permite desplazarte evitando</p> <p className="WelcomeText">aglomeraciones.</p></div>
          </div>
        <div className="Aceptgeoloc"><p className="WelcomeText">Al dar al botón comenzar estás aceptando que Mappi utilice tu ubicación.</p></div>
        </div>
        <button onClick={this.handleClick} className="btn btn-welcomePage">Comenzar</button>
      </div>
      <div className="welcome-page-l">
        <div className="pageContainer">
          <div className="imagesContainer">
            <img src="img/Welcome/Group2.png"  alt="cartel" className="Size3"></img>
            <div className="subtractContainer">
            <img src="img/Welcome/Subtract.png"  alt="cartel" className="Subtract3"></img>
            </div>
          </div>
          <div className="textContainer">
            <div className="titleContainer">
              <p className="title">Bienvenido a</p>
            </div>
            <div className="substractContainer">
              <img src="img/dark.png"  alt="logo" className="Subtract"></img>
            </div>
            <div className="Welcome">
              <p className="WelcomeText">Una app que te</p><p className="WelcomeText">permite desplazarte</p> <p className="WelcomeText">evitando</p><p className="WelcomeText"> aglomeraciones.</p>
            </div>
            <button onClick={this.handleClick} className="btn btn-welcomePage">Comenzar</button>
            <div className="Aceptgeoloc"><p className="WelcomeText">Al dar al botón comenzar estás aceptando que Mappi utilice tu ubicación.</p></div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Welcome;
