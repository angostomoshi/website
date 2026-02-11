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
        <a href="#" className="item"></a>
      </div>
      
          </div>
  )
}

export default SideBar
