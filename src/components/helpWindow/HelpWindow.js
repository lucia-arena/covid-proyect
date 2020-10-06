import React from "react";
import "./HelpWindow.css";

class HelpWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      ubicacion: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/mapa");
  };

  render() {
    return (
      <div className="help-page">
        <div className="back-help" onClick={this.handleClick}>
          <div className="back-div-help">
          <img
            src="img/AlertType/LeftArrow/Arrow.svg"
            alt="logo"
            srcSet="img/AlertType/LeftArrow/Arrow@2x.png 2x, img/AlertType/LeftArrow/Arrow@3x.png 3x"
            className="back-help-img"
          ></img>
          </div>
          <p className="back-help-p"> Ayuda </p>
        </div>
        <div className="type-help">
          <div className="type-help-div">
          <p className="type-help-p"> Preguntas frecuentes </p>
          </div>
          <article className="help-block">
            <section className="question-one">
              <p className="question-one-p">¿Qué es una manifestación?</p>
              <img
                src="img/Help/BottomArrow/BottomArrow.svg"
                alt="logo"
                srcSet="img/Help/BottomArrow/BottomArrow@2x.png 2x, img/Help/BottomArrow/BottomArrow@3x.png 3x"
                className="add-alert-img"
              ></img>
            </section>
            <section className="question-two">
              <div className="aliens-block">
                <p className="question-two-title">¿Hay aliens en el planeta tierra?</p>
                <img
                src="img/Help/TopArrow/TopArrow.svg"
                alt="logo"
                srcSet="img/Help/TopArrow/TopArrow@2x.png 2x, img/Help/TopArrow/TopArrow@3x.png 3x"
                className="add-alert-img"
              ></img>
              </div>
              <p className="question-two-p">
                Los extraterrestres ya nos han visitado y van a volver, según un estudio.
                El universo es inmenso, ¿qué nos hace pensar que estamos solos? Una investigación ofrece nuevas perspectivas y asegura que otras civilizaciones ya han estado en la Tierra
              </p>
            </section>
            <section className="question-three">
              <p className="question-three-p">¿Dónde estamos?</p>
              <img
                src="img/Help/BottomArrow/BottomArrow.svg"
                alt="logo"
                srcSet="img/Help/BottomArrow/BottomArrow@2x.png 2x, img/Help/BottomArrow/BottomArrow@3x.png 3x"
                className="add-alert-img"
              ></img>
            </section>
            <section className="question-four">
              <p className="question-four-p">¿Por qué?</p>
              <img
                src="img/Help/BottomArrow/BottomArrow.svg"
                alt="logo"
                srcSet="img/Help/BottomArrow/BottomArrow@2x.png 2x, img/Help/BottomArrow/BottomArrow@3x.png 3x"
                className="add-alert-img"
              ></img>
            </section>
            <section className="question-five">
              <p className="question-five-p">Politica de privacidad</p>
              <p className="question-five-p">Términos y condiciones</p>
            </section>
          </article>
        </div>
      </div>
    );
  }
}

export default HelpWindow;
