import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Membre from "./Components/Membre";
import Button from "./Components/Button";

const famille = {
  membre1: {
    nom: "Irène",
    age: 66,
  },
  membre2: {
    nom: "Adelino",
    age: 67,
  },
  membre3: {
    nom: "Nicolas",
    age: 28,
  },
  membre4: {
    nom: "Sylvie",
    age: 47,
  },
  membre5: {
    nom: "Pascal",
    age: 44,
  },
};
class App extends Component {
  // SECTION STATE -------------
  state = {
    famille,
    isShown: false,
  };
  // !SECTION

  // SECTION METHODES -------------
  handleClick = (nb) => {
    const famille = { ...this.state.famille };
    famille.membre3.age += nb;
    this.setState({
      famille,
    });
  };

  handleChange = (event, membre) => {
    const famille = { ...this.state.famille };
    const nom = event.target.value;
    famille[membre].nom = nom;
    this.setState({ famille });
  };

  handleShowDescription = () => {
    const isShown = !this.state.isShown;
    this.setState({ isShown });
  };

  hideName = (membre_id) => {
    const famille = { ...this.state.famille };
    famille[membre_id].nom = "X";
    this.setState({ famille });
  };
  // !SECTION

  // SECTION RENDER -------------
  render() {
    const { title } = this.props;
    const { famille } = this.state;

    // NOTE Gestion affichage de la description à l'appuie du bouton
    let description = undefined;
    if (this.state.isShown) description = <strong>C'est moi !</strong>;

    // NOTE Affichage de la liste
    const liste = Object.keys(famille).map((membre) => (
      <Membre
        key={membre}
        name={famille[membre].nom}
        age={famille[membre].age}
        hideName={() => this.hideName(membre)}
        handleChange= { (event) => this.handleChange(event, membre) }
      />
    ));

    // RETURN
    return (
      <div className="App">
        <h1>{title}</h1>
        
        {liste}
        {/* <Membre name={famille.membre3.nom} age={famille.membre3.age}>
          { description }
          <button onClick={this.handleShowDescription}>
            {this.state.isShown ? "Cacher" : "Montrer"}
          </button>
        </Membre> */}

        <Button vieillir={() => this.handleClick(2)} />
      </div>
    );
  }
}
// !SECTION
export default App;
