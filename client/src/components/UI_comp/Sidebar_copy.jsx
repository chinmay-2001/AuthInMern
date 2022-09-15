
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import { MdSpaceDashboard } from "react-icons/md";
// import { RiDashboard2Fill } from "react-icons/ri";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
import { BsBagCheckFill } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import scrollreveal from "scrollreveal";
export default function Sidebar() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  const handleLogout=()=>{
    localStorage.removeItem("token");
		window.location.reload();
  }

  return (
    <>
      <Section>
      <div>
        <div className="top">
          <div className="brand">
            {/* <FaTaxi /> */} 
            <span> Student Dashboard</span> 
          </div> 
          
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                {/* <a href="#"> */}
                <Link to="/profile/oppr">
                  <BsBagCheckFill/>
                  <span> Opportunities</span>

                </Link>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <Link to="/profile/status">
                {/* <Link to="/"> */}
                  <FiMessageSquare />
                  <span> Status</span>
                {/* </Link> */}
                </Link>
              </li>
           
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                {/* <Link to="/"> */}
                <Link to="/profile/faq"> 
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </Link>
                {/* </Link> */}
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                {/* <Link to="/"> */}
                 <Link to="/profile/setting"> 
                  <IoSettings />
                  <span> Settings</span>
                </Link>
                {/* </Link> */}
              </li>
            </ul>
          </div> 
        </div>
        
        <div className="logout">
          <a onClick={handleLogout}>
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      
      </div>
      </Section>
    </>
  );
  
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #ffc107;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ffc107;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }
  .logout {
    // position:relative;
    // bottom:20px;
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    margin:auto;
    width:120px;
    // font-size:10px;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }  
 `;
