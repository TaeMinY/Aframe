import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export default class Main extends Component {
    render() {
        return (
            <Wrapper>
                Aframe.js
            </Wrapper>
        )
    }
}
