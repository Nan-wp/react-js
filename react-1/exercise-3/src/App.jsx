import React from "react";
import "./App.css";

function App() {
  return <div id="app">
    <RegistrationForm />
    <DisplayMember />
  </div>;
}

const RegistrationForm = () => {
  return (
    // Code here
    
    <form id="registrationForm">
      <h1>Registration Form</h1>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <button type="submit">Register</button>
  </form>
  );
};

const DisplayMember = () => {
  let members = [
    'John Doe john@example.com',
    'Jane Smith jane@example.com',
  ];
  return (
    // Code here
    <div class="members">
      <h2>Registered Members</h2>
      <div class="member">{members}</div>
      <div class="member">{members}</div>
    </div>
  );
};

export default App;
