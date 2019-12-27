import React from 'react';
import ReactDOM from 'react-dom';
import { RippleButton } from './ripple-button';

export { Ripple } from './ripple';
export { RippleButton } from './ripple-button';


function App() {
  return <RippleButton>Hello</RippleButton>;
}

ReactDOM.render(<App />, document.getElementById('root'));

