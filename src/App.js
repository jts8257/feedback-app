import {useState} from 'react'
import React from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'

function App() {
    const [feedback, setFeedBack] = useState(FeedBackData);
    const deleteFeedBack = (id) => {
      if (window.confirm('Are your sure you want to delete?')) {
        setFeedBack(feedback.filter((item) => item.id !== id))
      }
    }
    
    return (
        <>
          <Header/>
          <div className='container'>
            <FeedBackStats feedBack = {feedback} />
            <FeedBackList feedBack={feedback}
             handleDelete = {(id) => deleteFeedBack(id)}/>
          </div>
        </>
      )
}

export default App
