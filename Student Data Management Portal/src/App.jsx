import React, { useState } from 'react'
import NavBar from './CrudComponents/NavBar'
import UserTable from './CrudComponents/UserTable'
import { Outlet } from 'react-router-dom'
import { DataContacx } from './Store/Store'
import axios from 'axios'

const App = () => {
  const [checkClick,setCheckClick ] =useState("AddUser")
  const [show,setShow] = useState(false)
  const [getId,setGetId] = useState()
  const showModel = ()=>{
    setShow(true);
  }

  const hideModel = ()=>{
    setShow(false);
  }
  const [user,setUser] = useState(
    {
      id:"",
      name:"",
      userName:"",
      email:""
    }
  )
  const [data,setData] = useState([])
  const loadData = ()=>{
     axios.get(`https://66dc2d1e47d749b72acaf1a9.mockapi.io/user`).then(
      (data)=>   setData(data.data)
    )
  
  }
  const addUser = ()=>{
    axios.post(`https://66dc2d1e47d749b72acaf1a9.mockapi.io/user`,user).then(
     ()=> loadData()
    )
  }
  const getSignleUserData = (fetchId)=>{
    axios.get(`https://66dc2d1e47d749b72acaf1a9.mockapi.io/user/${fetchId}`).then(
      (data)=>   setUser(data.data)
    )
  }
  const editUser = (fetchId)=>{
    axios.put(`https://66dc2d1e47d749b72acaf1a9.mockapi.io/user/${fetchId}`,user).then(
      ()=> loadData()
    )
  }
  const deleteUser = (fetchId)=>{
    axios.delete(`https://66dc2d1e47d749b72acaf1a9.mockapi.io/user/${fetchId}`).then(
      ()=> loadData()
    )
  }
  return (
    <>
    <DataContacx.Provider value={
      {
        show,showModel,hideModel,user,setUser,addUser,loadData,data,setData,getSignleUserData,setCheckClick,checkClick,editUser,getId,setGetId,deleteUser
      }
    }>
    <NavBar/>
    <Outlet/>
    </DataContacx.Provider>
    </>
  )
}

export default App