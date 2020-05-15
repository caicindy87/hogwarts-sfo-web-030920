import React, { Component } from "react";

import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Gif from "./Gif";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifUrl: "",
      loading: false,
    };
  }
  componentDidMount() {
    // this.fetchPigGifs();
  }

  fetchPigGifs = () => {
    this.setState({
      loading: true,
    });
    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=piglets"
    )
      .then((resp) => resp.json())
      .then((gif) =>
        this.setState({
          gifUrl: gif.data.images.downsized_large.url,
          loading: false,
        })
      );
  };

  render() {
    return (
      <div className="App ">
        <Nav />
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <Gif gifUrl={this.state.gifUrl} />
        )}
        <HogContainer />
      </div>
    );
  }
}

export default App;
