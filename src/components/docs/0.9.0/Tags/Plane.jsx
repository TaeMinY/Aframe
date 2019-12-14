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


const Plane = () => {
    return (
        <Wrapper id="<a-plane>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-plane>'}</Title>
                    <Text1>
                        평면 기본 요소는 유형이 평면으로 설정된 형상 구성 요소(geometry component)를 사용하여 평평한 표면을 작성합니다.
                  </Text1>
                    <SubTitle>예제</SubTitle>
                    <Html>
                        {`
        <html>
            <head>
                <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
            </head>
            <body>
                <a-scene>
                    <a-assets>
                        <img id="ground" src="ground.jpg">
                    </a-assets>
                    <!-- 기본 평면. -->
                    <a-plane color="#CCC" height="20" width="20"></a-plane>

                    <a-plane src="#ground" height="100" width="100" rotation="-90 0 0"></a-plane>
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

export default Plane;