import React, { Component } from "react";
import "./App.css";
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

class App extends Component {
  // STATE ------------------------
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  };

  // METHODES ------------------------
  addMessage = (message) => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages });
  };

  // RENDER ------------------------
  render() {
    return (
      <div className="box">
        <div>
          <div className="messages">
            <Message />
          </div>
        </div>
        <Formulaire 
          pseudo={this.state.pseudo} 
          addMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;
