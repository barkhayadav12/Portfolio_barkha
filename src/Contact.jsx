import React from 'react'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import contact from './photos/contact.svg'
const Contact = () => {
  return (
    <>
    <div className='contact'>
        <h1 style={{color:'violet'}}>FIND ME ON</h1>
        <h5>Feel free to connect with me</h5>
        <div className='links'>
        <a href='https://x.com/flyhighalwayss?t=JGuyeGggng0kI15bq1K3Bg&s=09'><i class="bi bi-twitter-x"></i></a>
        <a href='https://in.linkedin.com/in/barkha-yadav-727472212'><i class="bi bi-linkedin"></i></a>
        <a href='https://github.com/barkhayadav12'><i class="bi bi-github"></i></a>
        <a href="mailto:barkhayadav125@gmail.com"><i class="bi bi-envelope-at"></i></a>
        </div>
        <img src={contact}/>
    </div>
    </>
  )
}

export default Contact