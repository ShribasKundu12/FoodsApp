import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='navContainer'>

        <div className='navltContainer'>
          <h2>MY FOOD</h2>
        </div>
        <div className='navrtContainer'>
           <a href="/food">FOOD</a>
           <a href="/flist">FOODLIST</a>
           <a href="/sfood">SEARCH FOOD</a>
           <a href="/pcus">CONTACT US</a>
        </div>

    </div>
  )
}

export default Nav