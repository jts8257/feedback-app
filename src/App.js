import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackData from './data/FeedBackData'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage'

function App() {
    const [feedback, setFeedBack] = useState(FeedBackData);
    const deleteFeedBack = (id) => {
      if (window.confirm('Are your sure you want to delete?')) {
        setFeedBack(feedback.filter((item) => item.id !== id))
      }
    }
    const addFeedBack = (newFeedBack) => {
      newFeedBack.id = uuidv4()
      setFeedBack([newFeedBack, ...feedback])
    
    }
    
    return (

        <Router>
          <Header/>
          <div className='container'>
            <Routes>
            <Route exact path='/' element = {
              <>
              <FeedBackForm handleAdd = {addFeedBack}/>
              <FeedBackStats feedBack = {feedback} />
              <FeedBackList feedBack={feedback} handleDelete = {(id) => deleteFeedBack(id)}/>
            </>
            }>
              
            </Route>
              <Route path='/about' element = {<AboutPage/>} /> 
            </Routes>
          </div>
        </Router>
      )
}

export default App