import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div class='footer' style={{marginTop:'10px',color:'black',fontWeight:'bolder'}}>
        Designed and developed by Barkha Yadav
    </div>
  )
}

export default Footer