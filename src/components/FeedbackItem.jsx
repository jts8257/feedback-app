import {FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useState} from 'react'

function FeedbackItem({item, handleDelete}) {
    // useState 를 destructering 해서 사용하는 것임.
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an Example');

    
  return (
    <Card >
        {/* state 를 이렇게 접근함. */}
        <div className="num-display">{item.rating}</div>
        <butto onClick={()=> handleDelete(item.id)} className="close">
          <FaTimes color='purple'></FaTimes>
        </butto>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired

}

export default FeedbackItem
