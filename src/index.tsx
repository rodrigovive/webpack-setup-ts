import React from 'react';
import ReactDom from 'react-dom';
import Animated from './components/animated-square';

const App = () => {
  return (
    <>
      <p>Test </p>
      <Animated />
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
