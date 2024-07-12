 
import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CreateUser from './components/CreateUser';
// import UpdateUser from './components/UpdateUser';
import Register from './components/Register';
// import Users from './components/Users';
import Login from './components/Login';
import CreateUsercopy from './components/CreateUsercopy';
import UpdateUsercopy from './components/UpdateUsercopy';
import Userscopy from './components/Userscopy';



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
    <Route path='/' element={<Register />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/userss' element={<Userscopy />}></Route>
    <Route path='/create' element={<CreateUsercopy />}></Route>
    <Route path='/update/:id' element={<UpdateUsercopy />}></Route>

    {/* <Route path='/userss' element={<Users />}></Route>
    <Route path='/create' element={<CreateUser />}></Route>
    <Route path='/update/:id' element={<UpdateUser />}></Route> */}
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;
