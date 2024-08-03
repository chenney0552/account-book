# Account-Book React App

This is an online Single-page application with React 16 to provide accounting function for personal users.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please visit https://chencheng-moneybook.avosapps.us/ for demo.

## Technology stacks

Frontend and UI: React 16, Context, High order component

React tool: Ionicon, ReactRouter, Recharts, Bootstrap

Backend and testing: Jest, Enzyme, JsonServer, Axios, leancloud

## Develop Path

The develop path can be divided into four phases from design to deploy on the Azure.

![Develop Cycle](https://github.com/chenney0552/account-book/blob/master/public/develop-flow.jpg)

## Web Page Prototype of the Application

There are four main components in this application.

![Main Page](https://github.com/chenney0552/account-book/blob/master/public/main-page.png)

![Main Page With Graph](https://github.com/chenney0552/account-book/blob/master/public/main-page-with-graph.png)

![Edit Page](https://github.com/chenney0552/account-book/blob/master/public/edit-page.png)

![Calender Page](https://github.com/chenney0552/account-book/blob/master/public/calender-page.png)

## Component Layered Design

The application could be divided into components which is responsible for diplay data and container component which controls the state.

![Component Layered Design](https://github.com/chenney0552/account-book/blob/02_static_page/public/Component-Layer-Design.png)

## State Flow Design

The state of the application is maintained in the container (Home.js)

![State Flow Design](https://github.com/chenney0552/account-book/blob/03_add_state/public/state-flow-chart.png)