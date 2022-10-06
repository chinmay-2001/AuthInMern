import React, { useEffect } from "react";
import styled from "styled-components";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { cardStyles } from "./ReusableStyles";
import axios from 'axios'


export default function Recuitar(){
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    let [responseData,setresponseData]=useState([]);
    const [data, setData] = useState({ Company: "", Title: "",date:"" });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = ({currentTarget:input}) =>{
        setData({ ...data, [input.name]: input.value });
    }
    const handleSubmit = async (e) =>{
      // function handleSubmit (){
        e.preventDefault();
        try {
            const url = "http://localhost:8081/api/job";
            const res= await axios.post(url,data);
            getjob();
            
          } catch (error) {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              setError(error.response.data.message);
            }
          }
          
        }
    function handleDelete(company){
      console.log("here")
      try{
        const com={Company:company}
        console.log("inside try")
        const url="http://localhost:8081/api/deljob";
        const resp=axios.post(url,com)
        getjob();
      }
      catch(error){
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
      
    }

      function getjob(){
        axios.post('http://localhost:8081/api/getjob').then(res=>{
          console.log(res.data)
          setresponseData(res.data);
        }).catch(err=>{
          console.log(err);
        })
      console.log("responce",responseData);
      }

      useEffect(()=>{
        getjob();
      },[]);



    return(
        
        <>
        <Section>
          <Button variant="primary" onClick={handleShow} style={{width:"100px",margin:"auto"}}>
            Add Job
          </Button>

          {/* Jobs Table */}
          <div className="title">
        <h2>Opportunites</h2>
      </div>
      <div className="transactions">
      
      <table class="table align-middle mb-0 bg-dark">
        <thead class="bg-dark">
          <tr style={{color:"white"}}>
            <th>Name</th>
            <th>Title</th>
            <th>Apply before</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
              
               {responseData.map((responseData) => {
                // console.log(transaction.desciption)
                return(
                  
                 
                  <tr style={{color:"white"}}>
                    <td>
                      {/* <div className="transaction_image">
                        <img src={transaction.image} alt="" />
                      </div> */}
                      {responseData.Company}
                    </td>

                    <td>
                      {responseData.Title}
                    </td>

                    <td>
                      {responseData.date.substring(0,10)}
                    </td>

                    <td>
                      <div className="button_style">
                        <Button onClick={()=>handleDelete(responseData.Company)}  className="btn btn-link btn-sm btn-rounded"><span>delete</span></Button>
                      </div>
                    </td>
                  </tr>

                  
                );

              })} 

        </tbody>
       </table> 
       </div>

        </Section>
       
       
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Jobs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                <div className="form-group">
                    <label for="company">Company Name</label>
                    <input type="text" class="form-control" name="Company" id="company" onChange={handleChange} placeholder="Company Name"/>
                </div>
                <div className="form-group">
                    <label for="title">Titel</label>
                    <input type="text" class="form-control" name="Title" id="title" onChange={handleChange} placeholder="Title"/>
                </div>
                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" name="date" id="date" onChange={handleChange} placeholder="date"></input>
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
            {/* <Button variant="primary" onClick={()=>handleSubmit()}>
              Save 
            </Button> */}
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