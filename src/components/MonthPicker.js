import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'

class MonthPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year,
            selectedMonth: this.props.month
        }
    }

    toggleDropdown = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    selectYear = (event, yearNumber) => {
        event.preventDefault()
        this.setState({
            selectedYear: yearNumber
        })
    }

    selectMonth = (event, monthNumber) => {
        event.preventDefault()
        this.setState({
            isOpen: false,
            selectedMonth: monthNumber
        })
        this.props.onChange(this.state.selectedYear, monthNumber)
    }

    render() {
        const {year, month} = this.props
        const {selectedYear, selectedMonth} = this.state
        const {isOpen} = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(number => number + selectedYear)
        return (
        <div className='dropdown month-picker-component'>
            {/* <h4>Select month</h4> */}
            <button 
                className='btn btn-lg btn-secondary dropdown-toggle'
                onClick={this.toggleDropdown}
            >
                {`${selectedYear} year ${padLeft(selectedMonth)} month`}
            </button>
            { isOpen && 
                <div className='dropdown-menu' style={{display: 'block'}}>
                    <div className='row'>
                        <div className='col border-right'>
                            {yearRange.map((yearNumber, index) => 
                                <a key={index} 
                                   href="#"
                                   onClick={(event) => {this.selectYear(event, yearNumber)}}
                                   className={(yearNumber === selectedYear) ? 'dropdown-item active': 'dropdown-item'}>
                                   {yearNumber} year
                                </a>
                            )}
                        </div>
                        <div className='col'>
                            {monthRange.map((monthNumber, index) => 
                                <a key={index}
                                href="#"
                                onClick={(event) => {this.selectMonth(event, monthNumber)}}
                                className={(monthNumber === month) ? 'dropdown-item active': 'dropdown-item'}>
                                    {padLeft(monthNumber)} month
                                </a>
                            )}
                        </div>
                    </div>
                </div>    
            }
        </div>
        )
  }
} 


MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
export default MonthPicker