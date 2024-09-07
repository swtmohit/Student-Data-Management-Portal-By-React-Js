import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import MOdel from "./MOdel";
import { DataContacx } from "../Store/Store";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const UserTable = () => {
  const {showModel,data,loadData,setUser,getSignleUserData,setCheckClick,setGetId,deleteUser} = useContext(DataContacx)
  useEffect(()=>{
    loadData();
  },[])
const handleEdit = (fetchId)=>{
  setGetId(fetchId)
  getSignleUserData(fetchId);
  showModel();
  setCheckClick("EditUser")

}
const HandleAddBtn = ()=>{
  setUser( "")
  showModel();
  setCheckClick("AddUser")
}
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center ">
        <h1 className="mt-5">User Interface</h1>
        <Button variant="primary" onClick={HandleAddBtn} className="py-2 px-4 btn btn-primary   text-end">    
        <FaPlus />
      </Button>
        </div>    
      <div className="container mt-5">
        <table className="table text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {data.map(
            (user,index)=>(
              <tr key={index}>
              <td scope="col">{user.id}</td>
              <td scope="col">{user.name}</td>
              <td scope="col">{user.userName}</td>
              <td scope="col">{user.email}</td>
              <td scope="col">
                <div className="text-white">
                  <span className="btn btn-success mx-2"
                  onClick={()=>handleEdit(user.id)}
                  ><MdEdit/></span>
                  <span className="btn btn-danger mx-2" 
                  onClick={()=>deleteUser(user.id)}
                  ><RiDeleteBin6Fill/></span>
                </div>
              </td>
            </tr>
            )
           )}
          </tbody>
        </table>
      </div>
      <MOdel/>
    </>
  );
};

export default UserTable;
