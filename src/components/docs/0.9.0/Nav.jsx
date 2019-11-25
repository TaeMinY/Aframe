import React from 'react'
import styled from "styled-components"
const Wrapper = styled.div`
    min-width:310px;
    height:calc(100vh - 70px);
    
    background-color:#f5f5f5;
    box-sizing:border-box;
    position:fixed;
`
const Subject = styled.div`
    font-size:18px ;
`
const Tag = styled.div`
font-size:14.6px;
margin: 3px 0px;
    opacity:0.5;
    &:hover{
        opacity: 0.8 !important;
    }

`

const Tags = ["<a-box>", "<a-camera>", "<a-circle>", "<a-cone>", "<a-cursor>", "<a-curvedimage>", "<a-cylinder>", "<a-dodecahedron>", "<a-gltf-model>", "<a-icosahedron>", "<a-image>", "<a-light>", "<a-link>", "<a-obj-model>", "<a-octahedron>", "<a-plane>", "<a-ring>", "<a-sky>", "<a-sound>", "<a-sphere>", "<a-tetrahedron>", "<a-text>", "<a-torus-knot>", "<a-torus>", "<a-trianle>", "<a-video>", "<a-videosphere>"]

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
                            <Tag className="Tag" onClick={test[index]} >{value}</Tag>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Nav
