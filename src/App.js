import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Create from './containers/Create';
import { testItems, testCategories } from './testData';
import { flatternArr } from './utility';

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
