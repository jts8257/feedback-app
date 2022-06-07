import React from 'react'
import {useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';


function FeedBackForm( {handleAdd} ) {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 char')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating,
            }

            handleAdd(newFeedback)
            setText('')
            setRating(10)
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How Would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input 
                onChange = {handleTextChange} 
                type="text" 
                placeholder='Write a review'
                value={text} />
                <Button type='submit' version='secondary' isDisabled={btnDisabled} >Send</Button>
            </div>
            {/* message 가 있으면 message 를 보여준다. */}
            {message && <div className='message'> {message}</div>}
        </form>
    </Card>
  )
}

export default FeedBackForm