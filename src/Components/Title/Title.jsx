import React from 'react'
import './Title.css'

export const Title = ({title, subTitle, className = ''}) => {
  return (
    <div className={`title ${className}`.trim()}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title
