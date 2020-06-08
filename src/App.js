import React, { Component } from "react";
import ToDoList from "./components/toDoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;
