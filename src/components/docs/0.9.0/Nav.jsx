import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    min-width:330px;
    height:calc(100vh - 70px);
    
    z-index:-1;
    background-color:#f5f5f5;
    box-sizing:border-box;
    position:fixed;
`
const Subject = styled.div`
    font-size:18px ;
`

const Tags = ["<a-box>", "<a-camera>"]

function Nav() {

    const test = [() => { console.log("a") }, () => { console.log("b") }]

    return (
        <Wrapper>
            <div>
                <div style={{
                    width: "70%",
                    margin: "10% auto",
                }}>
                    <Subject>기본 태그</Subject>
                    <div style={{ margin: "5px 10px" }}>
                        {(Tags || []).map((value, index) => (
                            <div onClick={test[index]} style={{ opacity: "0.5" }}>{value}</div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Nav
