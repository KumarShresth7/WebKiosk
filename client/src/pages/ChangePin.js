import React from "react";
import {useState} from 'react';


const ChangePin = () => {
  const [oldPass, setoldPass] = useState('');
  const [newPass, setnewPass] = useState('');
  

  const handleReset = ()=>{
    setoldPass('');
    setnewPass('');  
  }

  
  return (
    <>
      <div className="text-center">
        <h1 className="text-red-500 text-bold">Change Login Password</h1>
        <br />
        <form>
          <label for="fname">Old Password: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="border-solid border-neutral-500 border-2 rounded-sm px-1"
            onChange={(e) => setoldPass(e.target.value)}
          />{" "}
          <br />
          <label for="lname">New Password: </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="border-solid border-neutral-500 border-2 rounded-sm px-1"
            onChange={(e) => setnewPass(e.target.value)}
          />
          <br />
          <button  className="border-solid border-neutral-500 border-2 rounded-sm px-1">
            Save
          </button>
          <span />
          <button onClick={handleReset} className="border-solid border-neutral-500 border-2 rounded-sm px-1">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePin;
