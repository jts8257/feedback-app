import {FaTimes, FaEdit} from 'react-icons/fa'
import {React, useContext} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
// import {useState} from 'react'
import FeedBackContext from '../context/FeedBackContext'

function FeedbackItem({item}) {
    // useState 를 destructering 해서 사용하는 것임.
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an Example');

    const {deleteFeedBack, editFeedBack} = useContext(FeedBackContext)

  return (
    <Card >
        {/* state 를 이렇게 접근함. */}
        <div className="num-display">{item.rating}</div>
        <button onClick={()=> deleteFeedBack(item.id)} className="close">
          <FaTimes color='purple'></FaTimes>
        </button>
        <button onClick={()=> editFeedBack(item)} className='edit'>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired

}

export default FeedbackItem
