import React from "react";
import { Tabs, Tab } from "../components/Tabs";
import CategorySelect from "../components/CategorySelect";
import { TYPE_INCOME, TYPE_OUTCOME } from "../utility";
import {testCategories} from '../testData'
import PriceForm from "../components/PriceForm";
import { AppContext } from "../App";
import withContext from "../WithContext";

class Create extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data } = this.props
        console.log(data)
        const filterCategories = testCategories.filter(category => category.type === TYPE_OUTCOME)
        return (
                <div className="create-page py-3 px-3 rounded mt-3" style={{background: '#fff'}}>
                    <Tabs activeIndex={0} onTabChange={() => {}}>
                        <Tab>outcome</Tab>
                        <Tab>income</Tab>
                    </Tabs>
                    <CategorySelect categories={filterCategories} onSelectCategory={() => {}}></CategorySelect>
                    <PriceForm
                        onFormSubmit={() => {}}
                        onCancelSubmit={() => {}}
                    />
                </div>
        )
    }
}

export default withContext(Create)