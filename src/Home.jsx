import React from 'react'
import homebg from './photos/hbg.jpeg'
import Words from './TypingAnimation'
const Home = () => {
  return (
    <div className='homeContent'>
     <div className='aboutMe'>
        <h1 style={{color:'white'}}>Hi There! &#128075;</h1>
        <h1 style={{color:'violet'}}>I'M Barkha Yadav</h1>
        <Words/>
     </div>
     <div>
     <img src={homebg} style={{width:'350px',height:'350px'}}/>
     </div>
    </div>
  )
}

export default Home