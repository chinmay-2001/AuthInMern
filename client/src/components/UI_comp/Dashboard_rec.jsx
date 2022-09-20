import {react} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Status from './Status';
import Button from 'react-bootstrap/Button';
import Recruitar from './Recruitar';
export default function Dashboard_rec(props){
    const va=props.flag;
    if(va==="1"){
      // console.log("dashboard");
      return (
        <Section>
            <Navbar/>
            <div className="grid">
            <Button href="/profile/update" variant="success">Profile</Button>{' '}
                <div className="row__one">
                      <Recruitar/>
                </div>
            </div>
          
        </Section>
      )
    }
    else{
      return (
      <Section>
            <Navbar/>
            <div className="grid">
                <div className="row__one">
                      <Status/>
                </div>
            </div>
        </Section>
      )
    }
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .row__one {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      height: 50%;
    }
  }`;