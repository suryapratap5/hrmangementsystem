import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import studentContext from '../Context/studentContext'
import SideNavigation from './SideNavigation'
import StudentFrom from './StudentFrom'
import TopNavbar from './TopNavbar'
import TopView from './TopView'

const Viewstudents = () => {

  const [display, setDisplay] = useState('hidden')
  const navigate = useNavigate();

  const Context = useContext(studentContext)

  const { students, fetchStudent } = Context;

  const StudentDisplay = () => {
    console.log('click')
    if(display==='hidden'){
      setDisplay('block')
    }else{
      setDisplay('hidden');
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchStudent();
      navigate('/viewstudents')
    } else {
      navigate('/')
    }
  }, [])

  const handleEdit = (student) => {
    console.log(student)
  }

  return (
    <>
      <StudentFrom display={display} FormDisplay={StudentDisplay} />
      <SideNavigation />
      <TopNavbar title={'TotalStudents'} />
      <TopView FormDisplay={StudentDisplay} name='Student' />

      <div className='bg-white ml-72 mt-16 rounded-t-md py-14' style={{ width: '73vw' }}>
        <div className='bg-pink-600 shadow-lg shadow-cyan-600/50 absolute rounded-md -top-7 mx-10 h-16 flex items-center' style={{ width: '65vw' }}>
          <div className=' px-6'>
            <h5 className='text-white'>Total Students ({students.length})</h5>
          </div>
        </div>
        <div className='py-5'>
          <table className='grid grid-flow-row '>
            <thead className='grid grid-flow-row border-b-2'>
              <tr className='grid grid-cols-10'>
                <th className='opacity-50 col-span-3 text-left ml-16'>Name</th>
                <th className='opacity-50'>Course</th>
                <th className='opacity-50'>Fees</th>
                <th className='opacity-50'>Duration</th>
                <th className='opacity-50'>College</th>
                <th className='opacity-50'>Degree</th>
                <th className='opacity-50'>Edit</th>
                <th className='opacity-50'>Delete</th>
              </tr>
            </thead>


            <tbody className='grid grid-flow-row'>
              { students.length !== 0 ? students.map((student) => {

                return (<tr key={student._id} className='grid grid-cols-10 text-center border-b-2 py-1'>
                  <td className='flex items-center col-span-3 pl-5'>
                    <img className='h-8 mr-3 -ml-3' src='/img/apple-icon.png' alt='python' />
                    <div >
                      <h4 className='text-left font-bold'>{student.name}</h4>
                      <p className='text-left opacity-70'>{student.email}</p>
                      <p className='text-left opacity-70'>{student.mobile}</p>
                    </div>
                  </td>
                  <td className='opacity-70'>{student.course}</td>
                  <td className=''><span className='bg-pink-800 text-white rounded-full px-2 py-1 '>{student.fees}</span></td>
                  <td className='opacity-70'>{student.duration}</td>
                  <td className='opacity-70'>{student.college}</td>
                  <td className='opacity-70'>{student.degree}</td>
                  <td className='text-blue-900'><button onClick={() => { handleEdit(student) }}><FontAwesomeIcon icon={faEdit} /></button></td>
                  <td className='text-red-900'><button><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>)
              }) : <tr className='ml-6'><th>No student availabe</th></tr>}


            </tbody>

          </table>

        </div>

      </div>
    </>
  )
}

export default Viewstudents