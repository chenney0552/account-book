import React, { Component } from "react";
import { AppContext } from "./App";

const withContext = (Component) => {
    return (props) => (
        <AppContext.Consumer>
            {
                ({state, actions}) => 
                    {
                        return <Component {...props} data={state} actions={actions}/>
                    }
            }        
        </AppContext.Consumer>
    )
}

export default withContext