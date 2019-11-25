import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    flex-direction:column;
`

const TitleAnimation = keyframes`
  0% {
    margin-top: -5em;
    font-size:4rem;
  }
  70% {
    margin-top: -1em;
  }
  100% {
     font-size:6.5rem;
  }
`
const ButtonAnimation = keyframes`
  0%{
      opacity:0;
  }
  100%{
      opacity:1;
  }
`

const Title = styled.div`
    transition:0.2s;
    font-size:6.5rem;
    margin-top:-1em;
    animation: ${TitleAnimation} 2s cubic-bezier(0.175,0.885,0.32,1.7);
    color:#06061d;
`

const Bar = styled.div`
    position: absolute;
    height:25%;
    bottom:0;
    left:0;
    right:0;
    background-color:#06061d;
`
const Button = styled.button`
    animation: ${ButtonAnimation} 1s forwards;
    animation-delay: 2s;
    opacity: 0;
    background-color:white;
    border: 1px solid black;
    border-radius:10px;
    padding:12px 50px;
    outline:none;
    font-size:20px;
    transition:0.5s;

    &:hover{
        background-color:#06061d;
        color:white;
    }
`

export default class Main extends Component {
    render() {
        return (
            <Wrapper>
                <Title>A-frame</Title>
                <Link to="/docs/0.9.0"><Button>시작하기</Button></Link>
                <Bar></Bar>
            </Wrapper>
        )
    }
}
