import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedBackProvider} from './context/FeedBackContext'

function App() {
    
    // Context 에서 함수도 관리가 가능하고, App.js 수준에서 prop drilling 할게 아니라 해당 component 에서 useContext 해서 사용할 수 있다.
    // deletePost, addPost 함수를 관리할 수 있다.

    return (
      <FeedBackProvider>
        <Router>
          <Header/>
          <div className='container'>
            <Routes>
            <Route exact path='/' element = {
              <>
              <FeedBackForm />
              <FeedBackStats />
              <FeedBackList />
              <AboutIconLink/>
            </>
            }>
              
            </Route>
              <Route path='/about' element = {<AboutPage/>} /> 

            </Routes>
            

            {/*
              NavLink 라는 친구가 있는데, activeClassName 의 className 을 통해 css 를 적용할 수 있다.
            <Card>
            <NavLink to='/' activeClassName='active'> Home </NavLink>
            <NavLink to='/' activeClassName='active'> About </NavLink>
            </Card>
             */}

          </div>
        </Router>
      </FeedBackProvider>
       
      )
}

export default App