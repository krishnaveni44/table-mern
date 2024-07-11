import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Users() {

// const [users,setUsers] = useState([{
//     Name: "veni", Email:"veni@gmail.com", Age: 30
// }])

const [users,setUsers] = useState([])

 useEffect(()=> {
    axios.get('https://table-mern-server.onrender.com/userss')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) => {
     axios.delete('https://table-mern-server.onrender.com/deleteUser/'+id)
     .then(res => {
      console.log(res)
      window.location.reload()
    })
     .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
<div className="w-50 bg-white rounded p-3">
      <Link to="/create" className='btn btn-success'>Add Blog+</Link>
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Blog Title</th>
          <th>Blog Description</th>
          <th>Blog ImageURL</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            users.map((user) => { 
             return <tr>
                <td>{user.name}</td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>{user.image}</td>
                <td>
                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                    <button className='btn btn-danger'
                    onClick={(e) => handleDelete(user._id)}>Delete</button>

                </td>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}
