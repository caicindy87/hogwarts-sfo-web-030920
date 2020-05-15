import React from "react";

import hogs from "../porkers_data";
import Hog from "./Hog";
import Filter from "./Filter";

class HogContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      pigs: [],
      type: "all",
      sortType: "",
      hidden: true,
    };
  }

  fetchHogs = () => {
    this.setState({
      pigs: hogs,
    });
  };

  componentDidMount() {
    this.fetchHogs();
  }

  renderHogs = (collection) => {
    return collection.map((pig) => (
      <Hog
        key={pig.name}
        pig={pig}
        hidePig={this.hidePig}
        hidden={this.state.hidden}
      />
    ));
  };

  onChangeType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  onSort = (e) => {
    const value = e.target.value;
    if (value === "name") {
      let sorted = [...this.state.pigs].sort(function (a, b) {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
      this.setState({
        sortType: value,
        pigs: sorted,
      });
    } else if (value === "weight") {
      let sorted = [...this.state.pigs].sort(function (a, b) {
        return a.weight - b.weight;
      });
      this.setState({
        sortType: value,
        pigs: sorted,
      });
    } else {
      this.fetchHogs();
      this.setState({
        sortType: "",
      });
    }
  };

  hidePig = () => {
    this.setState((prevState) => {
      return {
        hidden: !prevState.hidden,
      };
    });
  };

  render() {
    let filteredPigs = this.state.pigs.filter((pig) => pig.greased);
    return (
      <div className="indexWrapper">
        <Filter onChangeType={this.onChangeType} onSort={this.onSort} />
        {this.state.type === "greased"
          ? this.renderHogs(filteredPigs)
          : this.renderHogs(this.state.pigs)}
      </div>
    );
  }
}

export default HogContainer;
