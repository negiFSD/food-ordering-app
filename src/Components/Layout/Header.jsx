import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import Classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

function Header(props) {
  return (
    <>
    <header className={Classes.header}>
    <h1>React Meals</h1>
   <HeaderCardButton onClickButton={props.onShowCart}/>
    </header>
    <div className={Classes['main-image']}>
        <img src={mealsImage} alt="meal" />
    </div>
    </>
  )
}

export default Header