import React from 'react'
import styled from "styled-components"
import { Link } from "react-scroll";
const Wrapper = styled.div`
    min-width:310px;
    height:calc(100vh - 70px);
    top:70px;
    background-color:#f5f5f5;
    box-sizing:border-box;
    position:sticky;
    left:0px;
`
const Subject = styled.div`
    font-size:18px ;
`
const Tag = styled.div`
font-size:14.6px;
margin: 3px 0px;
cursor: pointer;
    opacity:0.5;
    &:hover{
        opacity: 0.8 !important;
    }

`

const Img = styled.img`
    width:15px;
    height:15px;
    transition:0.2s;
    transform : ${props => ((props.state === true) ? 'rotate(90deg)' : 'rotate(-90deg)')};
`


function Nav() {

    const [tagState, setTagState] = React.useState(true);

    const Tags = ["<a-box>", "<a-camera>", "<a-circle>", "<a-cone>", "<a-cursor>", "<a-curvedimage>", "<a-cylinder>", "<a-dodecahedron>", "<a-gltf-model>", "<a-icosahedron>", "<a-image>", "<a-light>", "<a-link>", "<a-obj-model>", "<a-octahedron>", "<a-plane>", "<a-ring>", "<a-sky>", "<a-sound>", "<a-sphere>", "<a-tetrahedron>", "<a-text>", "<a-torus-knot>", "<a-torus>", "<a-trianle>", "<a-video>", "<a-videosphere>"]
    const test = ["<a-box>", "<a-camera>", "<a-circle>", "<a-cone>", "<a-cursor>", "<a-curvedimage>", "<a-cylinder>", "<a-dodecahedron>", "<a-gltf-model>", "<a-icosahedron>", "<a-image>", "<a-light>", "<a-link>", "<a-obj-model>", "<a-octahedron>", "<a-plane>", "<a-ring>", "<a-sky>", "<a-sound>", "<a-sphere>", "<a-tetrahedron>", "<a-text>", "<a-torus-knot>", "<a-torus>", "<a-trianle>", "<a-video>", "<a-videosphere>"]



    const change = () => {
        setTagState(!tagState)
    }

    return (
        <Wrapper>
            <div style={{
                width: "70%",
                margin: "10% auto",
            }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", transition: "0.2s", cursor: "pointer" }} onClick={change}>
                    <Subject>기본 태그</Subject>
                    <Img src="/arrow.svg" state={tagState} ></Img>
                </div>
                <div style={{ marginLeft: "8px" }}>
                    {
                        tagState === true ? (
                            <div style={{ margin: "5px 10px" }} style={!tagState ? { maxHeight: "0px" } : {}}>
                                {(Tags || []).map((value, index) => (
                                    <Tag className="Tag" >
                                        <Link activeClass="active" to={test[index]} spy={true} smooth={true} offset={-70} duration={500} style={{ zIndex: 1000 }}>
                                            {value}
                                        </Link>
                                    </Tag>
                                ))}
                            </div>
                        ) : (<></>)
                    }
                </div>
            </div>
        </Wrapper >
    )
}

export default Nav
