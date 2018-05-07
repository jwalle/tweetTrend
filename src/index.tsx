import * as React from 'react';
import { render } from 'react-dom';
import TweetsCol from './Components/tweetsCol';
require('./styles/mainStyle.css');

const App = () => (
  <div id="mainContainer">
    <TweetsCol name="test" />
  </div>
);

render(<App />, document.getElementById('root'));
