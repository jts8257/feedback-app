import React from 'react'
import PropTypes from 'prop-types'


// prop 가 변하면 fuction 자체가 다시 실행됨.
function FeedBackStats({ feedBack }) {
    // Calculate ratings avg
    let average = feedBack.reduce( (acc, cur) =>  { 
        return acc + cur.rating}, 0) / feedBack.length;

        // 
    average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
        <h4>{feedBack.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average)? 0 : average}</h4>
    </div>
  )
}

FeedBackStats.propTypes = {
    feedBack: PropTypes.array.isRequired
}

export default FeedBackStats