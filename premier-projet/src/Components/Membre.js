import React from "react";

const Membre = ({ name, children, age }) => (
  <>
    <h2>{name} : {age}</h2>
    {console.log(children) }
    { children ? <p>{children}</p> : '' }
  </>
);

export default Membre;
