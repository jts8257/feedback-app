import React from 'react'
import PropTypes from 'prop-types'
// import { Route, Routes, NavLink, Link } from 'react-router-dom'


// Props 가 뭐 들어올지 알면 이렇게 해도 됨.
function Header({text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={headerStyles}> 
        <div className='container'>
                <h1>{text}</h1>

            </div>
        </header>
      )
}

// Props 가 안들어오면 default 로 설정된 Props 들이 설정됨.
Header.defaultProps = {
    text : 'Feedback UI',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#ff6a95'
}

// TS 를 안쓰면 이런식으로 해야함.
Header.propTypes = {
    text: PropTypes.string
}


export default Header