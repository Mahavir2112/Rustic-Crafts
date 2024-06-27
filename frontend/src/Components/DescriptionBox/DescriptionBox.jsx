import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>Declutter your space and add a touch of style with this multifunctional organizer. Perfect for storing decorative items, kitchen utensils, or everyday essentials. (Stylish & practical, multi-room use)</p>
        <p>
        You can browse, compare prices, and securely pay for your purchases online, with delivery straight to your doorstep.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
