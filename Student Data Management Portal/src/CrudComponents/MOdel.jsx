import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { DataContacx } from "../Store/Store";
const MOdel = () => {
  const { show, showModel, hideModel ,user,editUser,setUser,addUser,checkClick,getId} = useContext(DataContacx);
  const handleText = (e)=>{
    setUser( {...user,[e.target.name]:e.target.value})

  }
  const HandleSubmit = ()=>{
    if(checkClick==="AddUser"){
      addUser();
    }else{
      editUser(getId);
    }
    hideModel();

  }
  const {name,userName,email} = user
  return (
    <>
      <Modal show={show} onHide={hideModel}>
        <Modal.Header closeButton>
          <Modal.Title>
            {checkClick==="AddUser" ? <h1>AddUSer</h1> : <h1>EditUSer</h1>  }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="form-floating mb-3">
              <input
                name="name"
                  value={name}
                  onChange={handleText}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Enter Your Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
              name="userName"
                value={userName}
                onChange={handleText}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Enter Your Mobile</label>
            </div>
            <div className="form-floating mb-3">
              <input
              name="email"
                value={email}
                onChange={handleText}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Enter Email Address</label>
            </div>
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModel}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleSubmit}>
          {checkClick==="AddUser" ? "AddUSer": "UpDate"  }
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MOdel;
