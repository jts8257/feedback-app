import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedBackList({feedBack , handleDelete}) {
    if (!feedBack || feedBack.length === 0) {
        return <p>No FeedBack Yet</p>
    }
    return (
      <div className='feedback-list'>
        <AnimatePresence>
        {feedBack.map((item) => (
          <motion.div 
          key = {item.id}
          initial = {{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          >
            <FeedbackItem key = {item.id} item={item} 
            handleDelete = {(id) => handleDelete(id)}/>
            </motion.div>
        ))}
        </AnimatePresence>
      </div>
    )

    //  animation 이 더해지기 전임
  // return (
  //   <div className='feedback-list'>
  //     {feedBack.map((item) => (
  //         <FeedbackItem key = {item.id} item={item} 
  //         handleDelete = {(id) => handleDelete(id)}/>
  //     ))}
  //   </div>
  // )
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
