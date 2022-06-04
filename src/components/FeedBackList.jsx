import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedBackList({feedBack}) {
    if (!feedBack || feedBack.length === 0) {
        return <p>No FeedBack Yet</p>
    }

  return (
    <div className='feedback-list'>
      {feedBack.map((item) => (
          <FeedbackItem key = {item.id} item={item}/>
      ))}
    </div>
  )
}

FeedBackList.protoTypes = {
  feedBack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedBackList
