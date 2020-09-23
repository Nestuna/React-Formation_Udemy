import React from "react";

const Membre = ({ name, children, age, hideName, handleChange }) => (
  <>
    <input
          value={name}
          onChange={handleChange}
          type="text"
        />
    <h2 
      style={
         {
            backgroundColor: age < 30 ? 'yellow' : 'purple',
            color :  age < 30 ? 'black' : 'white',
            height: '70px'
         }
      }>
      {name} : {age}
      <button onClick={ hideName }>X</button>
    </h2>
   
    {console.log(children)}
    {children ? <p>{children}</p> : ""}
  </>
);

export default Membre;
