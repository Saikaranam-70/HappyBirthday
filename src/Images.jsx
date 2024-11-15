import React from 'react'
import img1 from '../public/images/memory1.jpg'
import img2 from '../public/images/memory2.jpg'
import img3 from '../public/images/memory3.jpg'
import './App.css'

const Images = () => {
  return (
    <div className='image-container'>
      <div className="img1">
      <img src={img1} alt="" />
      <p className="img-desc">Moon is just a white ball in front of your cuteness</p>
      </div>
      <div className="img1">
      <img src={img2} alt="" />
      <p className="img-desc">Laughs that never end.</p>
      </div>
      <div className="img1">
      <img src={img3} alt="" />
      <p className="img-desc">Forever in my Heart</p>
      </div>
    </div>
  )
}

export default Images
