import React from 'react'
import './index.css';

const Header = ({title}) => {
    const changeColor = {color:'white',backgroundColor:'mediumblue'}
  return (
    <section style={changeColor}>
        <header >
            <h1>{title}</h1>
        </header>
    </section>
  )
}

Header.defaultProps = {
  title: "todo list"

}

export default Header