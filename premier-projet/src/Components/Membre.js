import React from "react";

const Membre = ({ name, children, age }) => (
  <>
    <h2 
      style={
         {
            backgroundColor: age < 30 ? 'yellow' : 'purple',
            color :  age < 30 ? 'black' : 'white'
         }
      }>
      {name} : {age}
    </h2>
    {console.log(children)}
    {children ? <p>{children}</p> : ""}
  </>
);

export default Membre;
