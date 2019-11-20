import React from 'react';
import { Route } from 'react-router-dom';
import styled from "styled-components"

import {
  Main,
  Docs,
  Test
} from 'pages';

const Wrapper = styled.div`
  width:100%;
  height:100%;
`

function App() {
  return (
    <Wrapper>
      <Route exact path="/" component={Main} />
      <Route exact path="/docs" component={Docs} />
      <Route exact path="/docs/a" component={Test} />
    </Wrapper>
  );
};

export default App;
