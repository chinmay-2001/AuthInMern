import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../asset/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

// import { FiLogOut } from "react-icons/fi";
import "./Style.css"
export default function Transfers() {
  // console.log("here")
  const transactions = [
    {
      image: avatarImage,
      name: "Google",
      time: "Before 25 August",
      desciption:"AI/ML",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: "Facebook",
      time: "Befor 15 August",
      desciption:"Web development",
      amount: "-$25",
    },
    {
      image: avatarImage,
      name: "Vmware",
      time: "Before 16 August",
      desciption:"Android",
      amount: "+$150",
    },
    {
        image: avatarImage,
        name: "Fivetran",
        time: "Before 25 August",
        desciption:"Cloud",
        amount: "+$50",
      },
      {
        image: avatarImage,
        name: "Nutenix",
        time: "Befor 1 November",
        desciption:"AWS",
        amount: "-$25",
      },
      {
        image: avatarImage,
        name: "Barclays",
        time: "Before 16 August",
        desciption:"Salesforces",
        amount: "+$150",
      },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Opportunites</h2>
      </div>
      <div className="transactions">

      <table className="table align-middle mb-0 bg-dark">
        <thead className="bg-dark">
          <tr>
            <th  className="th">Name</th>
            <th className="th">Title</th>
            {/* <th>Status</th> */}
            <th className="th">Position</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
       </table>
       
        {transactions.map((transaction) => {
          console.log(transaction.desciption)
          return (
            
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  {/* <h5>{transaction.time}</h5> */}
                </div>
              </div>
              
            {/* description */}

              <div className="description">
                <h3>{transaction.desciption}</h3>
              </div>
            {/* time */}
              <div className="date">
                <h3>{transaction.time}</h3>
              </div>

            {/* Apply button  */}
              <div className="transaction__amount">
                {/* <span>{transaction.amount}</span> */}
                <div className="Apply">
                    <a href="#">
                        {/* <FiLogOut /> */}
                        <span className="Apply">Apply</span>
                    </a>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
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
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
            margin-top:2rem;
          }
        }
        &__details {
            margin-top:1rem;
        }
      }
      .description{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
      }
      .date{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        text-align:center;
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.5rem 0.5rem;
        width: 5rem;
        border-radius: 0.5rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        margin-top:2rem;
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
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
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
