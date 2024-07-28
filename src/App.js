import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Create from './containers/Create';
import { testItems, testCategories } from './testData';
import { flatternArr, ID, parseToYearAndMonth } from './utility';

export const AppContext = React.createContext()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: flatternArr(testItems),
      categories: flatternArr(testCategories)
    }
    this.actions = {
      deleteItem: (item) => {
        console.log('deleteItem called', item.id)
        delete this.state.items[item.id]
        this.setState({
          items: this.state.items
        })
      },
      createItem: (data, categoryId) => {
        const newId = ID()
        const parsedDate = parseToYearAndMonth(data.date)
        data.monthCategory = `${parsedDate.year}-${parsedDate.month}`
        data.timestamp = new Date(data.date).getTime()
        const newItem = {...data, id: newId, cid: categoryId}
        this.setState({
          items: {...this.state.items, [newId]: newItem}
        })
        console.log(newItem)
      },
      updateItem: (item, updatedCategoryId) => {
        const modifiedItem = {
          ...item,
          cid: updatedCategoryId,
          timestamp: new Date(item.date).getTime()
        }
        this.setState({
          items: {...this.state.items, [modifiedItem.id]: modifiedItem}
        })
      }
    }
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        actions: this.actions,
      }}>
      <Router>
        <div className='App'>
          <div className='container pb-5'>
            <Route path='/' exact component={Home}/>
            <Route path='/create' component={Create}/>
            <Route path='/edit/:id' component={Create}/>
          </div>
        </div>
      </Router>
      </AppContext.Provider>
    )
  }
}


export default App;
