import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PriceList from './components/PriceList';
const items = [
  {
    "id": 1,
    "title": "Travel",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "Travel",
      "type": "outcome"
    }
  },
  {
    "id": 2,
    "title": "Travel",
    "price": 400,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "Travel",
      "type": "outcome"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <PriceList 
        items={items} 
        onModifyItem={(item)=>{alert(item.id)}}
        onDeleteItem={(item)=>{alert(item.id)}}
        />
      </div>
    )
  }
}


export default App;
