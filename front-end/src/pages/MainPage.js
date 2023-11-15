import React from 'react'

function MainPage() {
  return (
    <div>
      <h1 className='bg-yellow-600'>
        <div className='w-100'><img className='object-contain h-20 w-20 px-0 py-0' src='https://hindubabynames.info/wp-content/themes/hbn_download/download/education-companies/thapar-institute-of-engineering-and-technology-patiala-logo.png' alt=''/></div>
        <div className='text-black text-center text-4xl'>THAPAR INSTITUTE OF ENGINEERING & TECHNOLOGY,PATIALA</div> 
        <div className='text-right text-blue-600 text-xl pt-0'>Good <br/> Morning <br/> Kumar <br/> <a className='underline text-white' href=''>Signout</a></div>
      </h1>


      <div className='mb-10 text-green-700'>
      Available options
      <br/>
<label for="personal info">Personal Info</label>

<select name="personal info" id="personal info">
  <option value="volvo">Personal Details</option>
  <option value="saab">Edit Info</option>
  <option value="mercedes">Bank Info</option>
  <option value="audi">Upload Docs</option>
</select>

<br/>

<label for="personal info">SRS</label>

<select name="personal info" id="personal info">
  <option value="volvo">New SRS Entry</option>
  <option value="saab">View Sent SRS</option>
  
</select>

<br/>

<label for="personal info">Grievances</label>

<select name="personal info" id="personal info">
  <option value="volvo">New Grievances Entry</option>
  <option value="saab">View Submitted Grievances</option>
  
</select>

<br/>

<label for="personal info">Fee Detail</label>

<select name="personal info" id="personal info">
  <option value="volvo">Personal Details</option>
  <option value="saab">Edit Info</option>
  <option value="mercedes">Bank Info</option>
  <option value="audi">Upload Docs</option>
</select>

<br/>

<label for="personal info">Academic Info</label>

<select name="personal info" id="personal info">
  <option value="volvo">Personal Details</option>
  <option value="saab">Edit Info</option>
  <option value="mercedes">Bank Info</option>
  <option value="audi">Upload Docs</option>
</select>

<br/>

<label for="personal info">Exam Info</label>

<select name="personal info" id="personal info">
  <option value="volvo">Personal Details</option>
  <option value="saab">Edit Info</option>
  <option value="mercedes">Bank Info</option>
  <option value="audi">Upload Docs</option>
</select>

    </div>

    <div className='underline text-blue-400'>
      <ol>
        <li><a href=''>FAQ</a></li>
        <li><a href=''>UG-1st Yr-Grp A TIMETABLE</a></li>
        <li><a href=''>UG-1st Yr-Grp B TIMETABLE</a></li>
        <li><a href=''>UG-2nd Yr-Grp A TIMETABLE</a></li>
        <li><a href=''>UG-2nd Yr-Grp B TIMETABLE</a></li>
        <li><a href=''>UG-3rd Yr-Grp A TIMETABLE</a></li>
        <li><a href=''>UG-3rd Yr-Grp B TIMETABLE</a></li>
        <li><a href=''>UG-4th yr-Grp A TIMETABLE</a></li>
        <li><a href=''>Change Pin</a></li>
        <li><a href=''>Logout</a></li>
      </ol>
    </div>
      
    </div>
  )
}

export default MainPage