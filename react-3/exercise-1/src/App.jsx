import React, { useState } from 'react';

function App() {
  // adding state here.
  const [choices, setChoices] = useState();

  return (
    <div>
      <button onClick={() => setChoices("Fullname")}>Fullname</button>
      <button onClick={() => setChoices("Age")}>Age</button>
      <button onClick={() => setChoices("Picture")}>Picture</button>
      <DisplayInfo choices={choices} />
    </div>
  );
}
function DisplayInfo(props) {
  const { choices } = props;

  let returnHTML;
  if (choices === "Fullname") {
    returnHTML = <h2>John Doe</h2>;
  } else if (choices === "Age") {
    returnHTML = <h2>30</h2>;
  } else if (choices === "Picture") {
    returnHTML = (
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    );
  } else {
    returnHTML = <p>Please select an option.</p>;
  }

  return <div>{returnHTML}</div>;
}


export default App;
