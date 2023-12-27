import React from 'react';

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
    <span>Turn on / off</span>
    <p>Current Temperature: XXX</p>
    </header>
    // Code for Header
    // <Header />
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <main>
      <Temperature/>
    </main>
   
  );
}

function Temperature() {
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
          <span> {temperature} Oc</span>
        </div>
  );
  
}

function Footer() {
  return (
    // Code for Footer
    // <Footer />
    <footer>
        <button>Up</button>
        <button>Down</button>
      </footer>
  );
}

export default App;
