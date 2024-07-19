import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    )
  }
}


export default App;
