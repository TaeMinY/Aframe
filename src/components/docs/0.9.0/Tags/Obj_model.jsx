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


const Obj_model = () => {
    return (
        <Wrapper id="<a-obj-model>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-obj-model>'}</Title>
                    <Text1>
                        .OBJ 모델 기본 요소는 3D Wavefront 모델을 표시합니다.
                  </Text1>
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
                        <a-asset-item id="crate-obj" src="crate.obj"></a-asset-item>
                        <a-asset-item id="crate-mtl" src="crate.mtl"></a-asset-item>
                    </a-assets>
                    <!-- assets에 저장된 crate-obj를 불러서 적용하였다. -->
                    <a-obj-model src="#crate-obj" mtl="#crate-mtl"></a-obj-model>
                    <!-- URL 인라인 정의는 웹 개발자에게 권장되지 하지 않습니다. -->
                    <a-obj-model src="crate.obj" mtl="crate.mtl"></a-obj-model>
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

export default Obj_model;