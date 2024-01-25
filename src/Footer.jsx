import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div class='footer' style={{marginTop:'10px',color:'black'}}>
       <p>Designed and developed by <span style={{color:'violet',fontWeight:'bolder'}}>Barkha Yadav</span></p>
    </div>
  )
}

export default Footer