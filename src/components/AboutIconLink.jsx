import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function AboutIconLink() {
  return (
    <div className='about-link'>
      {/*  react 에서 navigating 을 위해 a 태그를 쓰면 화면이 리프레시가 되므로 리액트를 쓰는 이유가 없다. */}
      {/* <a href='/about'> 
      <FaQuestion size={30}/>
       </a>*/}
      <Link to='/about'>
        <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

// Link 는 query param 도 넣을 수 있다.
//  <Link to = {{
//   pathname: '/about',
//   search: '?sort=name'
//   hash: '#hello',
// }}/>

export default AboutIconLink