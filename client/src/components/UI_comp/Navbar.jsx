import React from 'react'
import styled from 'styled-components'
import {BiSearch} from "react-icons/bi";
import {BiLogIn} from "react-icons/bi";

export default function Navbar() {
  return (
    <Nav>
        <div className="title">
            <h4>Hi, Chinmay</h4>
            <h1>Welcome to <span>Your Dashboard</span></h1>
        </div>
        <div className="search">
            <BiSearch/>
            <input type="text" className="text" placeholder='search'/>
        </div>
        {/* <div className="login">
            <a href="#" className="login">
                <BiLogIn/>
                <span className="logout">Login</span>
            </a>
        </div> */}
    </Nav>
  )
}
const Nav=styled.nav`
display:flex;
justify-content:space-between;
color:white;
.title{
    h4{
        margin-bottom:0rem;
        margin-left:1rem;
        text-align:left;
    }
    h1 {
        margin-left:1rem;
        margin-top:0rem;
        span{
            margin-left:1rem;
            color:#ffc107;
            font-family: "Permanent Marker", cursive;
            letter-spacing: 0.2rem;
        }
    }
}
.search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    // margin:a
    height:20px;
    svg {
      color: #ffc107;
    }
}
.login{
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    margin:auto;
   background-color: #da0037;
   a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
  }
}
input {
    background-color: transparent;
    border: none;
    color: #ffc107;
    font-family: "Permanent Marker", cursive;
    letter-spacing: 0.3rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }`;
