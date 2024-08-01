import React from 'react'
import Ionicon from 'react-ionicons'
const Loader = () => (
  <div className="loading-component text-center">
    <Ionicon icon="ios-refresh"
      fontSize="40px"
      rotate={true}
    />
    <h5>loading</h5>
  </div>
)

export default Loader