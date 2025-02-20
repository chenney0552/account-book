import React from "react";
import PropTypes from 'prop-types'

const TotalPrice = ({income, outcome}) => (
    <div className="row">
        <div className="col">
            <h5 className="income">income: <span>{income}</span></h5>
        </div>
        <div className="col">
            <h5 className="outcome">outcome: <span>{outcome}</span></h5>
        </div>
    </div>
)


TotalPrice.propTypes = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired,
}

export default TotalPrice
