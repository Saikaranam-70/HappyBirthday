import React from 'react'
import fl1 from '../public/images/flower.gif'
import cake from '../public/images/cake.gif'
import './App.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="flower1">
        <img src={fl1} alt="" />
      </div>
      <div className="mid">
      <div className="wish">
      <h1>Happy Birthday, My Love</h1>
      </div>
      <div className="cake">
      <img src={cake} alt="" />
      </div>
      </div>
      <div className="flower1">
        <img src={fl1} alt="" />
      </div>
      
    </div>
  )
}

export default Home
