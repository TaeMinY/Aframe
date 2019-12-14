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


const Cylinder = () => {
    return (
        <Wrapper id="<a-cylinder>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-cylinder>'}</Title>
                    <Text1>
                        원기둥 원형(primitive)은 튜브와 곡면을 만드는 데 사용됩니다.
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
                    <!-- 기본 원기둥 -->
                    <a-cylinder color="crimson" height="3" radius="1.5"></a-cylinder>
                    <!-- 육각형 -->
                    <a-cylinder color="cyan" segments-radial="6"></a-cylinder>
                    <!-- 픽맨 -->
                    <a-cylinder color="yellow" theta-start="50" theta-length="280" side="double"></a-cylinder>
                    <!-- 초록색 원통 -->
                    <a-cylinder color="green" open-ended="true"></a-cylinder>
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

export default Cylinder;