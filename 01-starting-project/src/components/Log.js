import React from "react";
import { useState } from "react";

export const Log = () => {
  const [open, setOpen] = useState(false);
  const toggleHandler = () => {
    setOpen((prevState) => !prevState);
    
  };
  return (
    <div>
        {open &&<h1>log</h1> }
      
      <button onClick={toggleHandler}>toggle</button>
    </div>
  );
};
