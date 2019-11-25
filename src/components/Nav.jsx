import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    max-width:300px;
    height:calc(100vh - 70px);
    
    z-index:-1;
    background-color:#f5f5f5;


`

function Nav() {
    return (
        <Wrapper>
            <div style={{
                width: "80%",
                margin: "0px auto",
            }}>

            </div>
        </Wrapper>
    )
}

export default Nav
