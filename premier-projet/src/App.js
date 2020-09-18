import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Membre from "./Components/Membre"
import Button from './Components/Button'

const famille = {
  membre1 : {
    nom : 'Irène',
    age: 66
  },
  membre2 : {
    nom : 'Adelino',
    age: 67
  },
  membre3 : {
    nom : 'Nicolas',
    age: 28
  },
  membre4 : {
    nom : 'Sylvie',
    age: 47
  },
  membre5 : {
    nom : 'Pascal',
    age: 44
  }

}
class App extends Component {
  // STATE -------------
  state = {
    famille
  }

  // METHODES -------------
  handleClick = nb => {
    const famille = {...this.state.famille}
    famille.membre3.age += nb
    this.setState(
      {
        famille
      }
    )
  }

  handleChange = event => {
    const famille = {...this.state.famille}
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille })
  }

  render() {
    const { title } = this.props
    const { famille } = this.state

    return (
      <div className="App">
        <h1>{title}</h1>
        <input value={ famille.membre1.nom} onChange= { this.handleChange } type="text" />
        <Membre 
          name= {famille.membre1.nom}
          age= {famille.membre1.age} 
          />
        <Membre 
          name={famille.membre2.nom} 
          age= {famille.membre2.age} 
          />
        <Membre 
          name={famille.membre3.nom}
          age= {famille.membre3.age}
        >
          <strong>C'est moi !</strong>
        </Membre>
        <Membre 
          name={famille.membre4.nom} 
          age= {famille.membre4.age} 
          />
        <Membre 
          name={famille.membre5.nom} 
          age= {famille.membre5.age} 
          />

        <Button 
          vieillir = { () => this.handleClick(2) }
          />
      </div>
    );
  }
}

export default App;
