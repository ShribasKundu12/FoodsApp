import React from 'react'
import "./Food.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Food() {
  return (
    <div className='prdContainer'>
        <div className='prdlContainer'>
         <Link to="fadd">ADD FOOD</Link>
         <Link to="fdelete">DELETE FOOD</Link>
         <Link to="fupdate">UPDATE FOOD</Link>
        </div>
        <div className='prdrContainer' style={{textAlign:"center",marginLeft:"500px"}}>
            <Outlet/>
            </div>

    </div>
  )
}
export default Food