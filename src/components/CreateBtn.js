import React from "react";
import Proptypes from 'prop-types'
import Ionicon from 'react-ionicons'

const CreateBtn = ({ onClick}) => (
    <button
        className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
        onClick={(e) => {onClick()}}
    >
        <Ionicon
            className="rounded-circle"
            fontSize="30px"
            color="#fff"
            icon="ios-add-circle"
        />
        Create a new item
    </button>
   )

CreateBtn.propTypes = {
    onClick: Proptypes.func.isRequired
}

export default CreateBtn