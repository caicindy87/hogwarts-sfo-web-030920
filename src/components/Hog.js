import React from "react";
import HogDetail from "./HogDetail";

class Hog extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isClicked: false,
    };
  }

  imagePath = (name) => {
    let imagePath = name.replace(/\s/g, "_").toLowerCase();
    return imagePath;
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        isClicked: !prevState.isClicked,
      };
    });
  };

  render() {
    const { name } = this.props.pig;
    return (
      <div>
        {" "}
        {this.props.hidden ? (
          <div className="pigTile ">
            <h2 onClick={this.handleClick}>{name}</h2>
            <img
              src={require(`../hog-imgs/${this.imagePath(name)}.jpg`)}
              onClick={this.handleClick}
            ></img>
            {this.state.isClicked && <HogDetail pig={this.props.pig} />}
            <br />
            <button onClick={this.props.hidePig}>Hide</button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hog;
