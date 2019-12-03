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


const Cursor = () => {
    return (
        <Wrapper id="<a-cursor>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-cursor>'}</Title>
                    <Text1>
                        커서 기본 요소는 핸드 컨트롤러가없는 장치에서 장면에 대한 클릭 및 기본 상호 작용을 허용하는 레티클입니다. 기본 모양은 원 모양입니다. 커서는 일반적으로 카메라의 자식으로 배치됩니다.
                    커서 작동 방법 및 커서 사용 방법에 대한 자세한 내용은 커서 구성 요소 설명서를 읽으십시오.</Text1>
                    <SubTitle>Example</SubTitle>
                    <Html>
                        {`
        <html>
            <head>
                <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
            </head>
            <body>
                <a-scene>
                    <a-camera>
                        <a-cursor></a-cursor>
                    </a-camera>
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

export default Cursor;