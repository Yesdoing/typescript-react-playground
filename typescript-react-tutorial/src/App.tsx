import React, { Component } from 'react';
import Profile from './components/Profile';
import CounterContainer from 'containers/CounterContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="예스두잉" job="미세코더"/>
        <CounterContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
