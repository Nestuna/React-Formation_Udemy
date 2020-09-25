import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Connexion extends Component {
  // STATE ------------------------------
  state = {
    pseudo: undefined,
    goToChat: false
  };

  // METHODES ------------------------------
  handleChangeText = (event) => {
    const pseudo = event.target.value;
    this.setState({ pseudo })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  // RENDER ------------------------------
  render() {
    // Router
    if(this.state.goToChat) {
      return(<Redirect to={`/pseudo/${this.state.pseudo}`}/>)
    }

    return (
      <div className="connexionBox">
        <form onSubmit={this.handleSubmit} className="connexion">
          <input
            type="text"
            placeholder="Pseudo"
            value={this.state.pseudo}
            required
            onChange={this.handleChangeText}
          />
          <button type="submit">
            GO
          </button>
        </form>
      </div>
    );
  }
}
