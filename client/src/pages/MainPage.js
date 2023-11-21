import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';


function MainPage() {

  const [name, setname] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/name')
    .then(result=>{
      setname(result.data);
    })
    .catch(err=>{
      console.log(err);

    })
  })

  // const [name, setname] = useState('')
  // const getName = async()=>{
  //   const response = await axios.get('http://localhost:3001/login')
  //   setname(response.data);
  // }
  
   
  
  return (
    <div className='bg-myColor h-screen'>
      <nav className="bg-orange-400 px-4 flex justify-between py-3">
        <div className="inline-block mb-3">
          <p className="text-5xl font-serif">
            Thapar University, Patiala
          </p>
        </div>
        <div>
          <p className="font-semibold">Welcome {"XYZ"}</p>
          <p className="rounded-md text-center bg-red-500 p-1"><Link to={"/"}>Sign Out</Link></p>
        </div>
      </nav>
      <div className="flex">
        <div className=" bg-yellow-400 w-1/5 p-4 h-full">
          <h1 className="text-2xl font-bold">Sidebar</h1>
          <ul>
            <li className="py-2"><Link href="#">Link 1</Link></li>
            <li className="py-2"><Link href="#">Link 2</Link></li>
            <li className="py-2"><Link href="#">Link 3</Link></li>
          </ul>
        </div>
        <div className="w-=3/5">
        <h1 className="text-2xl font-bold">Sidebar</h1>
          <ul>
            <li className="py-2"><Link href="#">Link 1</Link></li>
            <li className="py-2"><Link href="#">Link 2</Link></li>
            <li className="py-2"><Link href="#">Link 3</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainPage