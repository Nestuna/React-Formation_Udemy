import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { sampleText } from "./sampleText";
import marked from "marked";

class App extends Component {
  // SECTION STATE -----------------------------
  state = {
    text: sampleText,
  };

  // !SECTION --

  // SECTION COMPONENT CYCLE -----------------------------
  componentDidMount() {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ 'text' : sampleText })
    }
  }

  componentDidUpdate() {
    const { text } = this.state
    localStorage.setItem('text', text)
  }
  // !SECTION

  // SECTION METHODES -----------------------------
  _handleChangeText = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  _renderText = (text) => {
    const __html = marked(text);
    return { __html };
  };
  // !SECTION --

  // SECTION RENDER -----------------------------
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this._handleChangeText}
              className="form-control"
              rows="50"
              value={this.state.text}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <div>
              <div
                dangerouslySetInnerHTML={this._renderText(this.state.text)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  // !SECTION --
}

export default App;
