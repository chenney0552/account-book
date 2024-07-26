import React, { Component } from "react";
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft } from "../utility";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";
import {Tabs, Tab} from "../components/Tabs"
import Ionicon from 'react-ionicons'
import { tab } from "@testing-library/user-event/dist/tab";
import { AppContext } from "../App";
import withContext from "../WithContext";
import { withRouter } from "react-router-dom";
import { toArray } from "../utility";

const items = []

const newItem = {
    "id": 4,
    "title": "new added item",
    "price": 300,
    "date": "2018-10-10",
    "cid": 1
}

const tabsText = [LIST_VIEW, CHART_VIEW]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: tabsText[0],
        }
    }
    changeView = (index) => {
        this.setState({
            tabView: tabsText[index],
        })
    }
    changeDate = (year, month) => {
        this.setState({
            currentDate: {year, month}
        })
    }
    modifyItem = (modifiedItem) => {
        this.props.history.push(`/edit/${modifiedItem.id}`)
    }
    createItem = () => {
        this.props.history.push('/create')
    }
    deleteItem = (deletedItem) => {
        this.props.actions.deleteItem(deletedItem)
    }
    render() {
      const {data} = this.props
      const { currentDate, tabView } = this.state
      const items = toArray(data.items)
      const categories = data.categories
      const itemsWithCategory = items.map(item => {
        item.category = categories[item.cid]
        return item
      }).filter(item => {
        return item.date.includes((`${currentDate.year}-${padLeft(currentDate.month)}`))
    })
      let totalIncome = 0, totalOutcome = 0
      itemsWithCategory.forEach(item => {
          console.log(item)
          if (item.category !== null && item.category.type === TYPE_OUTCOME) {
              totalOutcome += item.price
          } else {
              if (item.category !== null) {
                totalIncome += item.price
              }
              
          }
    })
    
    return (
            <React.Fragment>
            <header className="App-header">
                <div className="row mb-5">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="row">
                    <div className="col">
                        <MonthPicker
                            year={currentDate.year}
                            month={currentDate.month}
                            onChange={this.changeDate}
                        />
                    </div> 
                    <div className="col">
                        <TotalPrice
                            income={totalIncome}
                            outcome={totalOutcome}
                        />
                    </div>
                </div>
            </header>
            <div className="content-area py-3 px-3">
                <Tabs activeIndex={0} onTabChange={this.changeView}>
                    <Tab>
                        <Ionicon
                            className="rounded-circle mr-2"
                            fontSize="25px"
                            color={'#007bff'}
                            icon='ios-paper'
                        />
                        List View
                    </Tab>
                    <Tab>
                        <Ionicon
                            className="rounded-circle mr-2"
                            fontSize="25px"
                            color={'#007bff'}
                            icon='ios-pie'
                        />
                        CHART VIEW
                    </Tab>
                </Tabs>
                
                <CreateBtn onClick={this.createItem}/>
                { tabView === LIST_VIEW && 
                    <PriceList
                        items={itemsWithCategory}
                        onModifyItem={this.modifyItem}
                        onDeleteItem={this.deleteItem}    
                    />
                }
                {  tabView === CHART_VIEW &&
                    <h1>CHART VIEW</h1>
                }
            </div>   
            </React.Fragment>)
  }
}

export default withRouter(withContext(Home))