import React from 'react'
import './card.css'

 function Card({ src, selected ,id,onCheckChange}) {

  function handleCheck(){
    onCheckChange(id)
  }

  return (
    <div className='CardContainer'>
        <img 
            className='CardImage'
            src={src}  />
        <input 
            className='cardInput'
            type="checkbox"
            checked={selected}
            onChange={handleCheck} />
    </div>
  )
}

export default Card