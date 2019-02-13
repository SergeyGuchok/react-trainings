import React, { Component, Fragment } from 'react';
import {TodoList} from './views/todo-list';
import {TodoItemCreator} from './views/todo-item-creator';
import {todoItems} from './containers/constants';

let initialId = 3;

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems
    }
  }

  handleAddition({text}) {
    this.setState({
      todoItems: [...this.state.todoItems, {
        id: ++initialId,
        text
      }] 
    })
  }

  render() {
    return (
      <Fragment>
        <TodoItemCreator />
        <TodoList todoItems={this.state.todoItems}/>      
      </Fragment>
    );
  }
}

export default App;
