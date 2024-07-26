import React from "react";
import { withRouter } from "react-router-dom";
import { Tabs, Tab } from "../components/Tabs";
import CategorySelect from "../components/CategorySelect";
import { TYPE_INCOME, TYPE_OUTCOME } from "../utility";
import {testCategories} from '../testData'
import PriceForm from "../components/PriceForm";
import { AppContext } from "../App";
import withContext from "../WithContext";
const tabsText = [TYPE_OUTCOME, TYPE_INCOME]

class Create extends React.Component {
    constructor(props) {
        super(props)
        const {id} = props.match.params
        const {categories, items} = props.data
        this.state = {
            selectedTab: (id && items[id]) ? categories[items[id].cid].type : TYPE_OUTCOME,
            selectedCategory: (id && items[id]) ? categories[items[id].cid] : null,
        }
    }

    tabChange = (index) => {
        this.setState({
            selectedTab: tabsText[index]
        })
    }

    selectCategory = (category) => {
        this.setState({
            selectedCategory: category
        })
    }

    cancelSubmit = () => {
        this.props.history.push('/')
    }

    submitForm = (data, isEditMode) => {
        if (!isEditMode) {
            this.props.actions.createItem(data, this.state.selectedCategory.id)
        } else {

        }
        this.props.history.push('/')
    }

    render() {
        const { data } = this.props
        const {items, categories} = data
        const { id } = this.props.match.params
        const editItem = (id && items[id]) ? items[id] : {}
        const {selectedTab, selectedCategory} = this.state
        const filterCategories = testCategories.filter(category => category.type === selectedTab)
        const tabIndex = tabsText.findIndex(text => text === selectedTab)
        return (
                <div className="create-page py-3 px-3 rounded mt-3" style={{background: '#fff'}}>
                    <Tabs activeIndex={tabIndex} onTabChange={this.tabChange}>
                        <Tab>outcome</Tab>
                        <Tab>income</Tab>
                    </Tabs>
                    <CategorySelect categories={filterCategories} 
                    onSelectCategory={this.selectCategory}
                    selectedCategory={selectedCategory}></CategorySelect>
                    <PriceForm
                        onFormSubmit={this.submitForm}
                        onCancelSubmit={this.cancelSubmit}
                        item={editItem}
                    />
                </div>
        )
    }
}

export default withRouter(withContext(Create))