import React from 'react'
import img from "./photos/home-main.svg"
import Words from './TypingAnimation'
const Home = () => {
  return (
    <div className='homeContent'>
     <div className='aboutMe'>
        <h1 style={{color:'white'}}>Hi There! &#128075;</h1>
        <h1 style={{color:'violet',paddingTop:'10px'}}>I'M Barkha Yadav</h1>
        <p style={{color:'violet',fontSize:'20px',paddingTop:'7px'}}>Full stack developer | Flutter</p>
     </div>
     <div>
     <img src={img}/>
     </div>
    </div>
  )
}

export default Home