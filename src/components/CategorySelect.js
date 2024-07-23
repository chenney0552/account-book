import React, { Component } from 'react'
import Ionicon from 'react-ionicons'

export default class CategorySelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id
        }
    }

    selectCategory = (event, category) => {
        this.setState({
            selectedCategoryId: category.id
        })
        this.props.onSelectCategory(category)
        event.preventDefault()
    }

    render() {
    const {categories, selectedCategory} = this.props
    const {selectedCategoryId} = this.state
    return (
      <div className='category-select-component'>
        <div className='row'>
            {
                categories.map((category, index) => {
                    const iconColor = (category.id === selectedCategoryId) ? '#fff' : '#555'
                    const backColor = (category.id === selectedCategoryId) ? '#347eff' : '#efefef'
                    const activeClassName = (selectedCategory && selectedCategory.id === category.id) ? 'category-item col-3 active' : 'category-item col-3'
                    return(
                        <div className={activeClassName} 
                             key={index}
                             role='button'
                             style={{textAlign: 'center'}}
                             onClick={(event) => {this.selectCategory(event, category)}}>
                            <Ionicon
                                className="rounded-circle"
                                style={{ backgroundColor: backColor, padding: '5px' }} 
                                fontSize="50px"
                                color={iconColor}
                                icon={category.iconName}
                            />
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
