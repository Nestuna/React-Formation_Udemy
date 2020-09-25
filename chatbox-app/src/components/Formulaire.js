import React, { Component } from "react";

export default class Formulaire extends Component {
  // STATE -------------------------
  state = { 
    message: '',
    length: this.props.length
  }

  // METHODES -------------------------
  handleChange = event => {
    // Capture le message tapé et le stocke dans le state
    const message = event.target.value
    const length = this.props.length - message.length
    console.log(length)
    this.setState({ message, length })
  }

  createMessage = () => {
    // Stockage du message dans le state qui liste tous les messages
    const { addMessage, pseudo } = this.props
    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)

    // Reset
    this.setState({ message: '', length: this.props.length})
  }

  handleSubmit = event => {
    // Création du message au submit du formulaire
    this.createMessage()
  }

  handleKeyUp = event => {
    // Gestion de l'appui Entrée sur le formulaire :
    // Actionne un submit
    console.log(event.key)
    if(event.key === 'Enter') {
      event.preventDefault()
      this.createMessage()
    }
  }

  // RENDER -------------------------
  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message} 
          required 
          maxLength={this.props.length} 
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp} />
        <div className="info">{this.state.length}</div>
        <button type="submit">Envoyer!</button>
      </form>
    );
  }
}
