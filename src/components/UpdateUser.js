import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function UpdateUser() {

    const {id} = useParams()
    const [name, setName] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState()

    const navigate = useNavigate()

    useEffect(()=> {
      axios.get('https://table-mern-server.onrender.com/getUser/'+id)
      .then(result => {console.log(result)
        setName(result.data.name)
        setTitle(result.data.title)
        setDescription(result.data.description)
        setImage(result.data.image)
      })
      .catch(err => console.log(err))
    },[])

    const Update = (e) => {
      e.preventDefault();
      axios.put("https://table-mern-server.onrender.com/updateUser/"+id, {name, title, description, image})
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
        <h2>Update Blog</h2>
        <div className='mb-2'>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="Enter User Name" className='form-control'
          value = {name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Blog Title</label>
          <input type="text" placeholder="Enter Blog Title" className='form-control'
          value = {title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Blog Description</label>
          <input type="text" placeholder="Enter Blog Description" className='form-control'
          value = {description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="">Blog ImageURL</label>
          <input type="text" placeholder="Enter Blog ImageURL" className='form-control'
          value = {image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className='btn btn-success'>Update Blog</button>
      </form>
    </div>  
  </div>
  )
}
