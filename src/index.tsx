import * as React from "react";
import { render } from "react-dom";
<<<<<<< HEAD
import TweetsCol from "./Components/tweetsCol";
require("./styles/mainStyle.css");

const App = () => (
  <div id="mainContainer">
    <TweetsCol name="test" />
=======
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
>>>>>>> abfb6e4c4d28356f63b21da20e33abdd4e76c64b
  </div>
);

render(<App />, document.getElementById("root"));
