import React from "react";
import styled from "styled-components";
// import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "./asset/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

// import { FiLogOut } from "react-icons/fi";
export default function Status() {

  const transactions = [
    {
      key:1,
      image: avatarImage,
      name: "Google",
      status:"Application pending"
    },
    {
      key:2,
      image: avatarImage,
      name: "Facebook",
      status:"Applicaiton Pending"
    },
    {
      key:3,
      image: avatarImage,
      name: "Vmware",
      status:"Application Approved",
    },
    {
      key:4,
        image: avatarImage,
        name: "Fivetran",
        status:"Application Approved"
      },
      {
        key:5,
        image: avatarImage,
        name: "Nutenix",
        status:"Application Pending"
      },
      {
        key:6,
        image: avatarImage,
        name: "Barclays",
        status:"Application Pending"
      },
  ];
  return (  
    <Section>
      <div className="title">
        <h2>Status</h2>
      </div>
      <div className="transactions">
      
      <table class="table align-middle mb-0 bg-dark">
        <thead class="bg-dark">
          <tr style={{color:"white"}}>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
              
               {transactions.map((transaction) => {
                console.log(transaction.desciption)
                return(
                  
                 
                  <tr style={{color:"white"}}>
                    <td>
                      <div className="transaction_image">
                        <img src={transaction.image} alt="" />
                      </div>
                      {transaction.name}
                    </td>

                    <td>
                      {transaction.status}
                    </td>
                    
                  </tr>
                  
                );

              })} 

        </tbody>
       </table> 
       </div>
    </Section>
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



