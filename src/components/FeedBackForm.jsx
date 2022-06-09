import React from 'react'
import {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedBackContext from '../context/FeedBackContext';

function FeedBackForm() {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const { addFeedBack, feedBackEdit, updateFeedback } = useContext(FeedBackContext)
    
    // data fetch 에 활용되기 좋은 기술
    // [] 부분은 의존성으로, 이 effect 가 어떤 state 의 변화에 발동될지를 본다.
    // 아래처럼 만들면 처음 로드될때 한번, feedBackEdit state 가 변할때마다 한번 동작한다.
    useEffect(() => {
        if(feedBackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedBackEdit.item.text)
            setRating(feedBackEdit.item.rating)
        }
    }, [feedBackEdit])

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

            if(feedBackEdit.edit === true) {
                updateFeedback(feedBackEdit.item.id, newFeedback)
            } else {
                addFeedBack(newFeedback)
            }
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