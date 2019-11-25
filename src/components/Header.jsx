import React, { Component } from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
    width:100%;
    height:70px;
    display:flex;
    align-items:center;
    background-color:white;
    position:sticky;
    top:0;
    left:0;
`

const Title = styled.div`
    font-size:30px;
    color : #0052D4;
`
const Text = styled.div`
    font-size:20px;
    color:#06061d;
    margin:auto 15px;
    text-align:center;
    transition:0.2s;
    opacity:0.8;
    height:30px;

    &:hover{
        color:#06061d;
        opacity:1;

    }
`
const Left = styled.div`
    flex:1;
    justify-content:start;
    margin-left:8%;
`
const Right = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-end;
    margin-right:8%;
`
class Header extends Component {
    render() {
        return (
            <>
                <Wrapper>
                    <Left>
                        <Title>A-frame</Title>
                    </Left>
                    <Right>
                        <div style={{ display: "flex", margin: "0px 10px" }}>
                            <Text>버전</Text>
                            <select style={{ padding: "0px 10px", height: "fit-content", margin: "auto 0px" }}>
                                <option selected="selected">0.9.0</option>
                            </select>
                        </div>
                        <Text>커뮤니티</Text>
                        <Text>공식문서</Text>
                        <img src="/github.png" alt="" width="30px" height="30px" style={{ margin: "15px" }} />
                    </Right>
                </Wrapper>
            </>
        );
    }
}

export default Header;