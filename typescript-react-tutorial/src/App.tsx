import React, { Component } from 'react';
import Profile from './components/Profile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="예스두잉" job="미세코더"/>
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
