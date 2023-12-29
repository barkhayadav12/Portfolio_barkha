import React from 'react'

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div class='footer'>
        Designed and developed by Barkha Yadav
        <p>Copyright {year} Barkha Yadav</p>
        <div class='links'>
        <a href='https://github.com/barkhayadav12'><i class="bi bi-github"></i></a>
        <a href='https://www.linkedin.com/in/barkha-yadav-727472212'><i class="bi bi-linkedin"></i></a>
        </div>
    </div>
  )
}

export default Footer