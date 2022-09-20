import React from "react";
// import styled from "styled-components";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { cardStyles } from "./ReusableStyles";


export default function Recuitar(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async (e) =>{
        e.preventDefault();
            try {
                const url = "http://localhost:8081/api/authr";
                const { data: res } = await axios.post(url, data);
                localStorage.setItem("token", res.data);
                window.location = "/";
                return <Navigate replace to="/main_rec"/>
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    setError(error.response.data.message);
                    }
            }
    
    return(
        
        <>
        <Section>
        <Button variant="primary" onClick={handleShow} style={{width:"100px",margin:"auto"}}>
          Add Job
        </Button>
        </Section>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Jobs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                <div className="form-group">
                    <label for="company">Company Name</label>
                    <input type="text" class="form-control" id="company"  placeholder="Company Name"/>
                </div>
                <div className="form-group">
                    <label for="title">Titel</label>
                    <input type="text" class="form-control" id="title" placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" placeholder="date"></input>
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        
    );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .transaction_image{
      img {
        height: 2.5rem;
        border-radius: 3rem;
        margin-top:2rem;
      }
    }
    .button_style{
      background-color: #d7e41e1d;
      padding: 0.5rem 0.5rem;
      width: 5rem;
      border-radius: 0.5rem;
      text-align: center;
      transition: 0.3s ease-in-out;
      margin-right:0rem
      &:hover {
        background-color: #ffc107;
        span {
          color: black;
        }
      }
        span {
          color: #ffc107;
        }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  
`;