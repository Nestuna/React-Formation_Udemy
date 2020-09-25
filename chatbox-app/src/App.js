import React, { Component, createRef } from "react";

// CSS & Animations
import "./App.css";
import './animations.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Components
import Formulaire from "./components/Formulaire";
import Message from "./components/Message";

// Firebase
import base from "./base";

class App extends Component {
  // REACT & STATE ------------------------
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo,
  };

  messagesRef = createRef();

  componentDidMount() {
    base.syncState("/", {
      context: this,
      state: "messages",
    });
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  // METHODES ------------------------
  addMessage = (message) => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    Object.keys(messages)
      .slice(0, -10)
      .forEach((key) => {
        messages[key] = null;
      });
    this.setState({ messages });
  };

  isUser = (pseudo) => pseudo === this.state.pseudo;

  // RENDER ------------------------
  render() {
    // Affichage des messages depuis le state
    const messagesRender = Object.keys(this.state.messages).map((key) => (
      <CSSTransition 
        key={key}
        timeout={200}
        classNames='fade'  
      >
        <Message
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
          isUser={this.isUser}
        />
      </CSSTransition>
    ))
    
    return (
      <div className="box">
        <div>
          <div className="messages" ref={this.messagesRef}>
            <TransitionGroup className="message">
              {messagesRender}
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
          length={140}
        />
      </div>
    );
  }
}

export default App;
