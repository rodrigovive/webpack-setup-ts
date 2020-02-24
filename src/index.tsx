import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return <p>Hello world</p>;
};

export default App;

ReactDom.render(<App />, document.getElementById('root'));
