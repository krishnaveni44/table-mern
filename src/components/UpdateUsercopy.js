import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function UpdateUsercopy() {

    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    

    const navigate = useNavigate()

    useEffect(()=> {
      axios.get('https://table-mern-server.onrender.com/getUser/'+id)
      .then(result => {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
        
      })
      .catch(err => console.log(err))
    },[])

    const Update = (e) => {
      e.preventDefault();
      axios.put("https://table-mern-server.onrender.com/updateUser/"+id, {name, email, age})
      .then(result => {
        console.log(result)
        navigate('/userss')
      })
      .catch(err => console.log(err))
    }

  return (
    <div className= 'd-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Update}>
        <h2>Update User</h2>
        <div className='mb-2'>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="Enter User Name" className='form-control'
          value = {name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Email" className='form-control'
          value = {email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Age</label>
          <input type="text" placeholder="Enter Age" className='form-control'
          value = {age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <button className='btn btn-success'>Update User</button>
      </form>
    </div>  
  </div>
  )
}
