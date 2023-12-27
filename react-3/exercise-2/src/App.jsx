import React, { useState } from 'react';

function App(){
    const [name, setName] = useState('Your Name Here');
    const [bio, setBio] = useState('short bio');

    return (
        <div  style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
          }}>
             <img
        src="https://via.placeholder.com/150"
        width={"150px"}
        alt="Placeholder"
      />
            <input type='text' placeholder='Name here' onChange={(ev)=>setName(ev.target.value)}></input>
            <input type='text' placeholder='short bio' onChange={(ev)=>setBio(ev.target.value)}></input>
            <Info name={name} bio={bio}/>
            <Social />
        </div>
    )
}

const Info = ({ name, bio }) => {
    return (
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
    );
  };
const Social = () => {
    return (
      <div>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </div>
    );
  };


export default App;
