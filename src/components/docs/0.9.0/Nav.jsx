import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    max-width:330px;
    height:calc(100vh - 70px);
    
    z-index:-1;
    background-color:#f5f5f5;
`

const Tags = ["<a-box>", "<a-camera>"]

function Nav() {

    const test = [() => { console.log("a") }, () => { console.log("b") }]

    return (
        <Wrapper>
            <div style={{
                width: "80%",
                margin: "0px auto",
            }}>
                <div>기본 태그</div>
                {(Tags || []).map((value, index) => (
                    <div onClick={test[index]}>{value}</div>
                ))}

            </div>
        </Wrapper>
    )
}

export default Nav
