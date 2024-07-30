import './App.css';
import axios from 'axios'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Create from './containers/Create';
import { flatternArr, ID, parseToYearAndMonth } from './utility';

export const AppContext = React.createContext()
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: {},
      categories: {},
      isLoading: false,
      currentDate: parseToYearAndMonth(),
    }
    this.actions = {
      getInitialData:async () => {
        this.setState({
          isLoading: true,
        })
        const { currentDate } = this.state
        //const getURLWithData = `http://localhost:3004/items?monthCategory=${currentDate.year}-${currentDate.month}&_sort=timestamp&_order=desc`;
        const getURLWithData = `http://localhost:3004/items?monthCategory=2018-12&_sort=timestamp&_order=desc`;
        console.log("getURLWithData", getURLWithData)
        const results = await Promise.all([axios.get('http://localhost:3004/categories'), axios.get(getURLWithData)])
        const [ categories, items ] = results
        this.setState({
          items: flatternArr(items.data),
          categories: flatternArr(categories.data),
          isLoading: false,
        })
        return items
      },
      selectNewMonth:async (year, month) => {
        this.setState({
          isLoading: true,
        })
        const getURLWithData = `http://localhost:3004/items?monthCategory=${year}-${month}&_sort=timestamp&_order=desc`;
        const items = await axios.get(getURLWithData)
        this.setState({
          items: flatternArr(items.data),
          currentDate: {year, month},
          isLoading: false,
        })
        return items
      },
      deleteItem: async (item) => {
        this.setState({
          isLoading: true,
        })
        const deleteItem = await axios.delete(`http://localhost:3004/items/${item.id}`)
        delete this.state.items[item.id]
        this.setState({
          items: this.state.items
        })
        return deleteItem
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
