import React, { Component } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {
  // STATE ------------------------
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  }

  // METHODES ------------------------
  addMessage = (message) => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  // RENDER ------------------------
  render() {
    const messagesRender = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
          pseudo = {this.state.messages[key].pseudo}
          message = {this.state.messages[key].message}
        />
      ))
    return (
      <div className="box">
        <div>
          <div className="messages">
            <div className="message">
              {messagesRender}
            </div>
          </div>
        </div>
        <Formulaire 
          pseudo={this.state.pseudo} 
          addMessage={this.addMessage}
          length={140} />
      </div>
    );
  }
}

export default App;
