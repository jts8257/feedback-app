import React from 'react'
import PropTypes from 'prop-types'
/**
 * 이렇게 해도 div 에 있는 것들이 Card 에 prop 로 전달이 된다...
 * <Card>
 *      <div className="num-display">{item.rating}</div>
 *      <div className="text-display">{item.text}</div>
 * </Card>
 * 
 */
function Card({children, reverse}) {
  // <div className={`card ${reverse && 'reverse'}`}> 를 통해서 conditional class name 이 됨.
  // css 에 따라서 revserse class 가 적용되면 view 가 달라짐
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

// PropTypes.node 는 뭘 의하는거지?

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card
