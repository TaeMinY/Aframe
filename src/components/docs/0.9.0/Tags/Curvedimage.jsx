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


const Curvedimage = () => {
    return (
        <Wrapper id="<a-curvedimage>">
            <Contents>
                <div style={{ width: "90%", margin: "1% auto" }}>
                    <Title>{'<a-curvedimage>'}</Title>
                    <Text1>

                        곡선 이미지 원선(primitive)는 사용자 주위에서 구부러지는 이미지를 만듭니다. 각각의 픽셀이 사용자로부터 동일한 거리에 위치하기 때문에 카메라 주위에 배열 된 곡선 이미지는 가독성을 만족시킬 수있다. 복잡한 레이아웃의 경우 평면 사이의 일련의 어색한 이음새가 아닌 매끄러운 표면을 보장하므로 각진 평면보다 더 나은 선택이 될 수 있습니다.
후드(hood) 아래에서 곡선 이미지는 텍스처가 실린더 내부에 매핑 된 양면 오픈 엔드 실린더입니다.</Text1>
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
                        <img id="my-image" src="image.png">
                    </a-assets>
                    <!-- assets에 저장된 my-image를 불러서 적용하였다. -->
                    <a-curvedimage src="#my-image" height="3.0" radius="5.7" theta-length="72"
                    rotation="0 100 0" scale="0.8 0.8 0.8"></a-curvedimage>
                    <!-- URL 인라인 정의는 웹 개발자에게 권장되지 하지 않습니다.-->
                    <a-curvedimage src="another-image.png"></a-curvedimage>
                </a-scene>
            </body>
        </html>
                        `}
                    </Html>
                </div>
            </Contents>
            <SubNav>
            </SubNav>
        </Wrapper >
    );
};

export default Curvedimage;