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


const Light = () => {
    return (
        <Wrapper id="<a-light>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-light>'}</Title>
                    <Text1>
                        조명은(light)는 조명과 장면의 음영을 변경해줍니다.
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
                    <!-- 왼쪽 상단에서 빛나는 빨간색 빛. -->
                    <a-light color="red" position="-1 1 0"></a-light>
                    <!-- 파란 빛, 공중에서 5 미터 떨어져있다. -->
                    <a-light type="point" color="blue" position="0 5 0"></a-light>
                    <!-- 어두운 주변 빛. -->
                    <a-light type="ambient" color="#222"></a-light>
                    <a-box></a-box>
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

export default Light;