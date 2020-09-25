import React, { Component } from "react";

export default class Formulaire extends Component {
  // STATE -------------------------
  state = { 
    message: undefined
  }

  // METHODES -------------------------
  handleChange = event => {
    const message = event.target.value
    this.setState({ message })
  }

  createMessage = () => {
    const { addMessage, pseudo } = this.props
    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)
  }
  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
    this.setState({ message: ''})
  }

  // RENDER -------------------------
  render() {
    return(
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message} 
          required 
          maxLength="140" 
          onChange={this.handleChange} />
        <div className="info">140</div>
        <button type="submit">Envoyer!</button>
      </form>
    );
  }
}
