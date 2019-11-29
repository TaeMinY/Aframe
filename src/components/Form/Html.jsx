import React from 'react'
import styled from "styled-components"

import { Highlight } from "react-fast-highlight"
const Wrapper = styled.div`
    width:100%;
    margin: 0 auto;
    background-color:#f8f8f8;
`
export default function Html(props) {

    return (
        <Wrapper>
            <Highlight languages={['html']}>
                {props.children}
            </Highlight>
        </Wrapper>
    )
}
