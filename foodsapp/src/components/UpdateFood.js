import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Nav from './Nav'
function UpdateFood() {
    let[food,setFood]=useState({
        fid:"",
        fname:"",
        price:""
    })
    let[msg,setmsg]=useState("");
    const updateData=(fid)=>{
        alert(fid);
        axios.put(`http://localhost:1005/food/update/${fid}`,food)
        .then((res)=>{
            console.log(res.data);
            setmsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WENT WRONG WITH DELETING DATA");
        })
    }
    const refreshData=()=>{
        setmsg("");
        setFood({
            fid:"",
            fname:"",
            price:"",
        })
    }
  return (
    <div style={{width:"150%",margin:"50px auto"}}>
      <Nav/>
      <h2>UPDATE FOOD</h2>
      <input type='text' className='form-control' placeholder='Enter the Product Id' value={food.fid} onChange={(event)=>{
        setFood({
            ...food,
            fid:event.target.value,
        })
      }}/>
      <input type='text' className='form-control' placeholder='Enter the Product Name' value={food.fname} onChange={(event)=>{
        setFood({
            ...food,
            fname:event.target.value,
        })
      }}/>
      <input type='text' className='form-control' placeholder='Enter the Product Price' value={food.price} onChange={(event)=>{
        setFood({
            ...food,
            price:event.target.value,
        })
      }}/>
      <button className='btn btn-outline-primary' style={{marginTop:"10px"}}
      onClick={()=>{
        updateData(food.fid)
      }}>UPDATE</button> &nbsp;&nbsp;
      <button className='btn btn-outline-secondary' style={{marginTop:"10px"}}
      onClick={refreshData}>REFRESH</button>
      <h2 className='text-danger'>{msg}</h2>
    </div>
  )
}

export default UpdateFood