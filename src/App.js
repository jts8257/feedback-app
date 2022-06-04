import {useState} from 'react'
import React from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'

function App() {
    const [feedback, setFeedBack] = useState(FeedBackData);

    return (
        <>
          <Header/>
          <div className='container'>
              <FeedBackList feedBack={feedback}/>
          </div>
        </>
      )
}

export default App
