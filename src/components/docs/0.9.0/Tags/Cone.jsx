import React from 'react';
import styled from "styled-components"
import Html from "../../../Form/Html"
const Wrapper = styled.div`
    display:flex;
    width:calc(100vw - 350px);
    margin-bottom:3%;
`
const Contents = styled.div`
    width: 75%;

`
const SubNav = styled.div`
    min-width:25%;
`
const Title = styled.div`
    font-size:36px;
    font-weight:300;
    color:#0052D4;
`

const Text1 = styled.div`
    margin:2% 0px;
    color: #333333;
    font-size:15px;
`
const SubTitle = styled.div`

    position:relative;
    color:#2c3e50;
    font-size:23px;
    padding-bottom:5px;
    box-sizing:border-box;
    margin-bottom:30px;
    &::before{
    content:" ";
    position:absolute;
    bottom:-10px;
    width:100%;
    height:1px;
    background-color:#ccc;
    z-index:1000;

    }
`


const Cone = () => {
    return (
        <Wrapper>
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-cone>'}</Title>
                    <Text1>

                        원뿔 원선(cone primitive)은 원뿔 모양을 만듭니다.</Text1>
                    <SubTitle>Example</SubTitle>
                    <Html>
                        {`
        <html>
            <head>
                <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
            </head>
            <body>
                <a-scene>
                    <a-assets>
                        <img id="texture" src="texture.png">
                    </a-assets>
                    <!-- 기본 원 -->
                    <a-cone color="tomato" radius-bottom="2" radius-top="0.5"></a-cone>
                    <!-- 이미지 원 -->
                    <a-cone src="#texture"></a-cone>
                 </a-scene>
            </body>
        </html>
                        `}
                    </Html>
                </div>
            </Contents>
            <SubNav>
            </SubNav>
        </Wrapper>
    );
};

export default Cone;