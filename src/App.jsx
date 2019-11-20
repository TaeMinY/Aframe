import React from 'react';
import { Route } from 'react-router-dom';
import {
  Main,
  Docs,
  Test
} from 'pages';
function App() {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/docs" component={Docs} />
      <Route exact path="/docs/a" component={Test} />
    </>
  );
};

export default App;
