import React from "react";
import "./Cover.css";

class Cover extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log("pulse");
    this.props.history.push("/presentacion");
  };

  render() {
    return (
      <div className="cover-page-container">
        <img
        src="img/Cover/SubtractLeft/Subtract.svg"
        alt="logo"
        className="subtract-left"
        ></img>
        <img
          src="img/Cover/SubtractLeftHorizon/Subtract.svg"
          alt="logo"
          srcSet="img/Cover/SubtractLeftHorizon/Subtract@2x.png 2x, img/Cover/SubtractLeftHorizon/Subtract@3x.png 3x"
          className="subtract-left-horizon"
        ></img>
        <div className="logo-box">
          <img
            src="img/Cover/Logo/Logo.svg"
            alt="logo"
            srcSet="img/Cover/Logo/Logo@2x.png 2x,
                    img/Cover/Logo/Logo@3x.png 3x"
            className="Logo"
            onClick={this.handleClick}
          ></img>
        </div>
        <img
          src="img/Cover/SubtractRight/Subtract.svg"
          srcSet="img/Cover/SubtractRight/Subtract@2x.png 2x,
             img/Cover/SubtractRight/Subtract@3x.png 3x"
          alt="logo"
          className="subtract-right"
        ></img>
        <img
          src="img/Cover/SubtractRightHorizon/Subtract.svg"
          srcSet="img/Cover/SubtractRightHorizon/Subtract@2x.png 2x,
             img/Cover/SubtractRightHorizon/Subtract@3x.png 3x"
          alt="logo"
          className="subtract-right-horizon"
        ></img>
      </div>
    );
  }
}

export default Cover;
