import React from 'react';
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function CreateUser() {

  const [name, setName] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  // const [image,setImage] = useState()

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("https://table-mern-server.onrender.com/createUser",{name, title, description})
    .then(result => {
      console.log(result)
      navigate('/userss')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className= 'd-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add Blog</h2>
          <div className='mb-2'>
            <label htmlFor="">User Name</label>
            <input type="text" placeholder="Enter User Name" className='form-control'
            onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor="">Blog Title</label>
            <input type="text" placeholder="Enter Blog Title" className='form-control'
            onChange={(e) => setTitle(e.target.value)}/>
          </div>

          <div className='mb-2'>
            <label htmlFor="">Blog Description</label>
            <input type="text" placeholder="Enter Blog Description" className='form-control'
            onChange={(e) => setDescription(e.target.value)}/>
          </div>

          {/* <div className='mb-2'>
            <label htmlFor="">Blog ImageURL</label>
            <input type="text" placeholder="Enter ImageURL" className='form-control'
            onChange={(e) => setImage(e.target.value)}/>
          </div> */}
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>  
    </div>

  )
}
