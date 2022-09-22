import React, { useState } from 'react'
import studentContext from './studentContext'

const StudentState = (props) => {

  const [message, setMessage] = useState("")
  const [type, setType] = useState("");
  const [students, setStudents] = useState([])
  const [courses, setCourses] = useState([])

  const addStudent = async (stdDetails) => {

    const { name, email, mobile, college, degree, course, fees, duration, query } = stdDetails;

    const response = await fetch('http://localhost:4000/auth/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('token')
      },
      body: JSON.stringify({ name, email, mobile, college, degree, course, fees, duration, query })
    })

    const result = await response.json();
    if(result.success){

      setStudents(students.concat(result.data));
      
      setMessage(result.message);
      setType('green')
      setTimeout(() => {
        setMessage('')
        setType('')
      }, 3000);
    }else{
      setMessage(result.message);
      setType('red')
      setTimeout(() => {
        setMessage('')
        setType('')
      }, 3000);
    }
  }

 

  const fetchStudent = async () => {
    const response = await fetch('http://localhost:4000/auth/fetchStudents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('token')
      }
    })

    const result = await response.json();

    setStudents(result)
  }

  const addCourse = async(course)=>{

    const response = await fetch('http://localhost:4000/auth/addCourse',{
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
        'access_token' : localStorage.getItem('token')
      },
      body : JSON.stringify(course)
    })

    const result = await response.json();
    if(result.success){
      setCourses(courses.concat(result.data));
      setMessage(result.message);
      setType('green');

      setTimeout(() => {
        setMessage('');
        setType('')
      }, 3000);
    }
    else{
      setMessage(result.message);
      setType('red');

      setTimeout(() => {
        setMessage('');
        setType('')
      }, 3000);
    }
  }


  const fetchCourses = async()=>{
    const response = await fetch('http://localhost:4000/auth/showCourses',{
      method : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access_token' : localStorage.getItem('token')
      }
    })

    const result = await response.json();
  
    setCourses(result.courses);
    
  }



  return (
    <>
      <studentContext.Provider value={{ message, setMessage, type, setType, students, fetchStudent, addStudent, courses, fetchCourses, addCourse }}>
        {props.children}
      </studentContext.Provider>
    </>
  )
}

export default StudentState