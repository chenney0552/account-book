import React, { Component } from "react";
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth } from "../utility";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";
import { tab } from "@testing-library/user-event/dist/tab";

const categories = {
    "1" : {
        "id": "1",
        "name": "Travel",
        "type": "outcome",
        "iconName": "ios-plane"
    },
    "2" : {
        "id": "2",
        "name": "StockIncome",
        "type": "income",
        "iconName": "logo-yen"
    }
}

const items = [
    {
      "id": 1,
      "title": "Travel",
      "price": 200,
      "date": "2018-09-10",
      "cid": 1
    },
    {
      "id": 2,
      "title": "Travel",
      "price": 400,
      "date": "2018-09-10",
      "cid": 1
    },
    {
      "id": 3,
      "title": "Stock Income",
      "price": 400,
      "date": "2018-09-10",
      "cid": 2
    }  
]

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW,
        }
    }
    changeView = () => {

    }
    changeDate = () => {

    }
    modifyItem = () => {

    }
    createItem = () => {

    }
    deleteItem = () => {

    }
    render() {
      const { items, currentDate, tabView } = this.state
      const itemsWithCategory = items.map(item => {
        item.category = categories[item.cid]
        return item
      })
      let totalIncome = 0, totalOutcome = 0
      itemsWithCategory.forEach(item => {
          if (item.category.type === TYPE_OUTCOME) {
              totalOutcome += item.price
          } else {
              totalIncome += item.price
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
            <ViewTab activeTab={tabView} onTabChange={this.changeView} />
            <CreateBtn onClick={this.createItem}/>
            <PriceList
                items={itemsWithCategory}
                onModifyItem={this.modifyItem}
                onDeleteItem={this.deleteItem}    
            />
        </div>   
      </React.Fragment>
    )
  }
}