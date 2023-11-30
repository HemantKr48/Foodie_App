import { useState } from "react";
const User = (props) => {
    const [count]=useState(0);
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h2>Count:{count}</h2>
      <h3>Location:Bhubaneshwar</h3>
      <h4>Contact:hemantkumar</h4>
    </div>
  );
};

export default User;
