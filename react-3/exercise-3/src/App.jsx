import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(40);
  
  return (
    <div id="app">
      <Header temp={temperature} />
      <Content tempContent={temperature} />
      <Footer temperature={temperature} setTemperature={setTemperature}/>
    </div>
  );
}

function Header(props) {
  const tempInHeader = props.temp;
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {tempInHeader}</p>
    </header>
  );
}

function Content(props) {
  const tempInContent = props.tempContent;
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature tempTemperature={tempInContent} />
    </div>
  );
}

function Temperature(props) {
  const tempInTemperature = props.tempTemperature;
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{tempInTemperature} Oc</span>
    </div>
  );
}

function Footer({temperature,setTemperature}) {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={()=>setTemperature(temperature+1)}>Up</button>
      <button onClick={()=>setTemperature(temperature-1)}>Down</button>
    </footer>
  );
}

export default App;
