import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';
import { LIST_VIEW, CHART_VIEW } from './utility';
import MonthPicker from './components/MonthPicker';

const items = [
  {
    "id": 1,
    "title": "Travel",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "Travel",
      "type": "outcome",
      "iconName": "ios-plane"
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
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <PriceList 
        items={items} 
        onModifyItem={(item)=>{alert(item.id)}}
        onDeleteItem={(item)=>{alert(item.id)}}
        /> */}
        {/* <ViewTab
          activeTab={LIST_VIEW}
          onTabChange={(view) => {console.log(view)}}
        /> */}
        <MonthPicker year={2018} month={5}/>
      </div>
    )
  }
}


export default App;
