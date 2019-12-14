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


const Video = () => {
    return (
        <Wrapper id="<a-video>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-video>'}</Title>
                    <Text1>
                        비디오 프리미티브는 평평한 평면에서 비디오를 텍스처로 재생합니다.
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
                        <video id="penguin-sledding" autoplay loop="true" src="penguin-sledding.mp4"></video>
                    </a-assets>
                    <!-- assets에 저장된 penguin-sledding를 불러서 적용하였다. -->
                    <a-video src="#penguin-sledding" width="16" height="9" position="0 0 -20"></a-video>
                    <!-- URL 인라인 정의는 웹 개발자에게 권장되지 하지 않습니다. -->
                    <a-video src="airbending.mp4"></a-video>
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

export default Video;