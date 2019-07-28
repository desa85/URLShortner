import React, { Component } from "react";

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    isURLName: false,
    URLName: ''
  }
}
  render() {
    
    return (
      <div className = 'container'>
        <h1>URLShortner</h1>
        <div className = 'row'>
          <div className = "d-block mx-auto form-group" id = 'main'>
            <label>Enter the URL address</label>
            <input type = 'text' className = 'form-control' />
            <input 
              type = "checkbox" 
              className = "custom-control-input" 
              id="customCheck1" 
              checked = {this.state.isURLName}
              onClick = {e => this.setState({isURLName: e.target.checked})} />
            <label className = "custom-control-label" for="customCheck1" >enter your own short link name</label>
            <input 
              type = 'text' 
              className = 'form-control' 
              disabled = {!this.state.isURLName}
              value = {this.state.URLName}
              onChange = {e => this.setState({URLName: e.target.value})}
              />
            <button className = 'btn btn-primary'>Отправить</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;