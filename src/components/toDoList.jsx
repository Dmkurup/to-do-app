import React, { Component } from "react";
import ToDoItem from "./toDoItem";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  handleDelete = (key) => {
    const filteredItems = this.state.items.filter(item=>item.key!=key);
    this.setState({items:filteredItems});
    console.log("HANDLE DELETE");
  };

  handleUpdate = (text,key) => {
    const items=this.state.items;
    items.map(item=>{
        if(item.key ===key){
            item.text=text;
        }
    })
    this.setState({items});
    console.log("HANDLE UPDATE");
  };

  render() {
    const { items } = this.state;
    return (
      <div className="toDolistMain">
        <div className="header">
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add Item</button>
          </form>
        </div>
        <ToDoItem
          items={items}
          onDelete={this.handleDelete}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default ToDoList;
