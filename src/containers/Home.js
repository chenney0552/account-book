import React, { Component } from "react";
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME } from "../utility";
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";

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
    },
    {
        "id": 3,
        "title": "Stock Income",
        "price": 400,
        "date": "2018-09-10",
        "category": {
          "id": "2",
          "name": "Travel",
          "type": "income",
          "iconName": "logo-yen"
        }
      }  
]

export default class Home extends Component {
  render() {
    let totalIncome = 0, totalOutcome = 0
    items.forEach(item => {
        if (item.category.type === TYPE_OUTCOME) {
            totalOutcome += item.price
        } else {
            totalIncome += item.price
        }
    })
    console.log("totalIncome:", totalIncome)
    return (
      <React.Fragment>
        <header className="App-header">
            <div className="row mb-5">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="row">
                <div className="col">
                    <MonthPicker
                        year={2018}
                        month={8}
                        onChange={() => {}}
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
            <ViewTab activeTab={LIST_VIEW} onTabChange={() => {}} />
            <CreateBtn onClick={() => {}}/>
            <PriceList
                items={items}
                onModifyItem={() => {}}
                onDeleteItem={() => {}}    
            />
        </div>   
      </React.Fragment>
    )
  }
}