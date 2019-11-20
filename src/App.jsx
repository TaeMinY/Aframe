import React from 'react';
import { Route } from 'react-router-dom';
import {
  Main,
  Docs
} from 'pages';
function App() {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/docs" component={Docs} />
    </>
  );
};

export default App;
