import {React, useContext} from 'react'
import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types' // context 로 state 를 관리하면서부터 propType 을 관리할 필요가 없어짐.
import FeedBackContext from '../context/FeedBackContext'
import Spinner from './shared/Spinner'

function FeedBackList() {
  const { feedBack, isLoading } = useContext(FeedBackContext)
    if (!isLoading && (!feedBack || feedBack.length === 0)) {
        return <p>No FeedBack Yet</p>
    }
    return isLoading ? <Spinner/> : (
        <div className='feedback-list'>
          <AnimatePresence>
          {feedBack.map((item) => (
            <motion.div 
            key = {item.id}
            initial = {{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
              <FeedbackItem key = {item.id} item={item} />
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

// context 로 state 를 관리하면서부터 propType 을 관리할 필요가 없어짐.
// FeedBackList.propTypes = {
//   feedBack: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   )
// }

export default FeedBackList
