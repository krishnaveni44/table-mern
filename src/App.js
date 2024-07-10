
import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Register from './Register';
import Users from './Users';
import Login from './Login';
import Home from './Home';

function App() {

  // const [users, setUsers] = useState([])

  // useEffect(()=> {
  //   axios.get('http://localhost:5000/getUsers')
  //   .then(users => setUsers(users.data))
  //   .catch(err => console.log(err))
  // },[])

const [count, setCount] = useState(0);

  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>   
    <Route path='/' element={<Register />}></Route>
    <Route path='/users' element={<Users />}></Route>
    <Route path='/create' element={<CreateUser />}></Route>
    <Route path='/update/:id' element={<UpdateUser />}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;
