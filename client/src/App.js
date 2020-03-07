// import React from 'react';
import './App.css';

import React, { Component } from "react";
import API from "./utils/API";


class App extends Component {

  handleFormSubmit = event => {
    event.preventDefault();

    let testStudent = {
      name: "dude",
      studentId: "hdhd76ehf5"
    }

    API.saveStudent(testStudent)
            .then(res => alert("student added!"))
            .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
       <button onClick={this.handleFormSubmit}>Test</button>
      </div>
    );
  }
}

export default App;
