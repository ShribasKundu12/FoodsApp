import React from 'react'
import "./NavClient.css"
function NavClient() {
  return (
    <div className='navCContainer'>

        <div className='navCltContainer'>
          <h2>FOOD APP FOR ORDER</h2>
        </div>
        <div className='navCrtContainer'>
           <a href="/flist">FOODLIST</a>
           <a href="/sfood">SEARCH FOOD</a>
           <a href="/addOrder">ADD ORDER</a>
           <a href="/billing">BILLING</a>
        </div>

    </div>
  )
}

export default NavClient