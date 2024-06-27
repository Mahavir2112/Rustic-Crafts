import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import photo from '../Assets/photo1.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h1 className='myh1'>Bring Warmth & Character</h1>
        <h1 className='mmyh1'>to Your Home</h1>
        <br/><br/><br/>
        <p className='myp'>Discover handcrafted treasures made with love and tradition.</p>
        <div className='hero-latest-button'>
            <div>Latest Collections</div>
              <a href="http://localhost:3000/mens">
                <img src={arrow_icon} alt="Click to navigate"/>
              </a>
        </div>

      </div>

      <div className='hero-right'>
        <img className='photo' src={photo} alt=''/>
      </div>
    </div>
  )
}

export default Hero
