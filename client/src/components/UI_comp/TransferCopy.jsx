import React from "react";
import styled from "styled-components";
// import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "./asset/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

// import { FiLogOut } from "react-icons/fi";
export default function TransfersCopy() {

  const transactions = [
    {
      key:1,
      image: avatarImage,
      name: "Google",
      time: "Before 25 August",
      desciption:"AI/ML",
    },
    {
      key:2,
      image: avatarImage,
      name: "Facebook",
      time: "Befor 15 August",
      desciption:"Web development",
    },
    {
      key:3,
      image: avatarImage,
      name: "Vmware",
      time: "Before 16 August",
      desciption:"Android",
    },
    {
      key:4,
        image: avatarImage,
        name: "Fivetran",
        time: "Before 25 August",
        desciption:"Cloud",
      },
      {
        key:5,
        image: avatarImage,
        name: "Nutenix",
        time: "Befor 1 November",
        desciption:"AWS",
      },
      {
        key:6,
        image: avatarImage,
        name: "Barclays",
        time: "Before 16 August",
        desciption:"Salesforces",
      },
  ];
  return (  
    <Section>
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
                      {transaction.desciption}
                    </td>

                    <td>
                      {transaction.time}
                    </td>

                    <td>
                      <div className="button_style">
                        <a href="#" className="btn btn-link btn-sm btn-rounded"><span>Apply</span></a>
                      </div>
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


// <tr>
//   <td >
//     <div className="d-flex align-items-center"/>
//     {/* <img src={transaction.image}
//     style="width:45px;height:45px" class="rounded-circle"/> */}
//     <div className="ms-3">
//       <p className="fw-bold mb-1">{transaction.name}</p>
//       {/* <p className="text-muted mb-0">john.doe@gmail.com</p> */}
//     </div>
//   </td> 
//   <td key={transaction.key}>
//     <p className="fw-normal mb-1">{transaction.desciption}</p>
//     {/* <p className="text-muted mb-0">IT department</p> */}
//   </td>
//   <td key={transaction.key}>
//     <span className="badge badge-success rounded-pill d-inline">Active</span>
//   </td>
//   <td key={transaction.key}>Senior</td>
//   <td key={transaction.key}>
//     <button type="button" className="btn btn-link btn-sm btn-rounded">
//       Apply
//     </button>
//   </td>
// </tr>
