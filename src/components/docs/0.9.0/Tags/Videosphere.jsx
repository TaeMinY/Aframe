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


const Videosphere = () => {
    return (
        <Wrapper id="<a-videosphere>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-videosphere>'}</Title>
                    <Text1>
                        비디오 스피어 프리미티브는 장면의 배경에서 360 ° 비디오를 재생합니다. 비디오 스피어는 비디오 텍스처가 내부에 매핑 된 큰 구체입니다.
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
                      <video id="antarctica" autoplay loop="true" src="antarctica.mp4"> </video>
                    </a-assets>
                    <!-- assets에 저장된 antarctica를 불러서 적용하였다. -->
                    <a-videosphere src="#antarctica"></a-videosphere>
                    <!-- URL 인라인 정의는 웹 개발자에게 권장되지 하지 않습니다. -->
                    <a-videosphere src="africa.mp4"></a-videosphere>
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

export default Videosphere;