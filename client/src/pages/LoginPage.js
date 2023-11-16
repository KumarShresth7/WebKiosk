import React from "react";
import axios from 'axios';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function LoginPage() {
  const [enrollmentNo, setenrollmentNo] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();


  const  handleSubmit = (e)=>{
    e.preventDefault();   
    axios.post('http://localhost:3001/login',{enrollmentNo,password})
  .then(result=>{
    console.log(result)

    if(result.data==="Login successfull"){
      navigate("/main");
    }

    else if(result.data==="The password is incorrect"){
      alert('The password is incorrect');
    }

    else
    alert('Wrong credentials');
  })
  
  .catch(err=>console.log(err))
  }

  const handleReset = ()=>{
    setenrollmentNo('');
    setpassword('');
  }

  

  return (
    <>
      <nav className="bg-orange-400 text-center">
        <div className="inline-block">
          <p className="text-5xl font-semibold mb-1">
            Thapar University, Patiala
          </p>
          <p className="font-medium mb-1">
            (Formerly known as Thapar Institute of Engineering and Technology)
          </p>
          <p className="text-white font-semibold mb-1">
            WEB KIOSK(INTERNET) for Parent/Students
          </p>
        </div>
      </nav>
      <div className="MainArea bg-yellow-300 flex py-5 justify-center px-5">
        <img
          className="h-2/5 w-2/5 rounded-3xl mx-5"
          src="https://images.shiksha.com/mediadata/images/1584960645php8nt1Zj.jpeg"
          alt=""
        />
        <div
          className="Authentication mx-7 flex flex-col"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div>
            <p className="bg-orange-400 text-white text-center rounded-md font-semibold">
              Kiosk Authentication Screen
            </p>
            <form onSubmit={handleSubmit}>
              <div className="py-0.5 inline-block">
                <label htmlFor="Member Type">Member Type:&nbsp; </label>
                <select
                  name="member"
                  id="member"
                  className="border-solid border-neutral-500 border-2 rounded-sm w-auto"
                >
                  <option value="Students">Students</option>
                  <option value="Parents">Parents</option>
                </select>
              </div>
              <br />
              <div className="py-0.5 inline-block">
              <label htmlFor="enrollmentNo">Enrollment No: </label>
              <input
                type="text"
                id="enrollmentNo"
                name="enrollmentNo"
                className="border-solid border-neutral-500 border-2 rounded-sm px-1"
                onChange={(e)=>setenrollmentNo(e.target.value)}
              />
              </div>
              <br />
              <div className="py-0.5 inline-block">
              <label htmlFor="password">Password/Pin: &nbsp; </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-solid border-neutral-500 border-2 rounded-sm px-1"
                onChange={(e)=>setpassword(e.target.value)}
              />
              </div>
              <br />
              <div className="py-0.5 inline-block">
              <button
                type="submit"
                className="border-solid border-neutral-500 border-2 rounded-sm"
              >
                Submit
              </button>
              <button onClick={handleReset}
                type="reset"
                className="border-solid border-neutral-500 border-2 rounded-sm"
              >
                Reset
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="Disclaimer">
        Disclaimer:Thapar Institute of ENgineering and Technology is not
        responsible for any inadvertent error that may have crept in the results
        being published on WEB KIOSK. The results published on net are for
        immediate information to the examinees. These cannot be treated as final
        result. Original Grade Cards have been issued by the Institute
        separately under the signature of Registrar and are authentic proof of
        academic performance.
      </div>
    </>
  );
}

export default LoginPage;
