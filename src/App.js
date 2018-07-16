import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ChatPage from './components/ChatPage/ChatPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ChatPage />
        </div>
      </Provider>
    );
  }
}

export default App;
