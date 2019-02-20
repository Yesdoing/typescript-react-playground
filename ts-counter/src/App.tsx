import React, { Component } from 'react';
import Profile from 'components/Profile';
import CounterContainer from 'container/CounterContainer';
import TodoList from 'components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="벨로퍼트" job="코더" />
        <CounterContainer />
        <TodoList />
      </div>
    );
  }
}

export default App;
