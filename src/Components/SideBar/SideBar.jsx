import React from 'react'
import './SideBar.css'
import logo from '../../assets/logo.svg'




export const SideBar = () => {
  return (
    <div className='menu'>
      <div className="logo">
    <img src={logo} alt="" />
      </div>

      <div className="menu-list">
        <button type="button" className="item">Menu</button>
      </div>
      
          </div>
  )
}

export default SideBar
