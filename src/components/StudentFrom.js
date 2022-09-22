import React, { useState,useContext, useEffect, useRef } from 'react'
import studentContext from '../Context/studentContext'

const StudentFrom = (props) => {

    const closeForm = useRef(null)
    const Context = useContext(studentContext);
    const {addStudent,  fetchCourses, courses} = Context;

    useEffect(() => {
      fetchCourses();
    }, [])
    
    
    const [stdDetails, setStdDetails] = useState({name : '', email: '', mobile: '', college: '', degree: '',  query:''})

    const onChange = (e)=>{
        
        setStdDetails({...stdDetails, [e.target.name] : e.target.value})
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addStudent(stdDetails);
        closeForm.current.click();
        
        setStdDetails({name : '', email: '', mobile: '', college: '', degree: '', course: '', fees: '', duration:'', query:''})

    }

    return (
        <div className={`absolute top-0 left-0 z-10 bg-transparent ${props.display}`} style={{ width: '100vw', height: '100vh' }}>
            <div className='text-left bg-white text-slate-600 mx-auto border-2 border-slate-500 rounded-md' style={{ width: '43vw' }}>
                <h3 className='font-bold py-5 pl-5 text-black'>Add Student here</h3>
                <hr />
                <div className='pt-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex items-center justify-center py-3'>
                            <input type='text' className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='name' id='name' value={stdDetails.name} onChange={onChange} placeholder='Student name' />
                            <input type='text' className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='degree' id='degree' value={stdDetails.degree} onChange={onChange} placeholder='Degree' />
                        </div>

                        <div className='flex items-center justify-center py-3'>
                            <input type='text' className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='email' id='email' value={stdDetails.email} onChange={onChange} placeholder='Email' />

                            <select className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' defaultValue={'DEFAULT'} onChange={onChange} name='course' id='course'>
                                <option value={'DEFAULT'} disabled>Course</option>
                                {courses.map((course)=>{
                                    return (
                                    <option key={course._id} value={course.course}>{course.course}</option>
                                    )
                                })}

                            </select>
                        </div>

                        <div className='flex items-center justify-center py-3'>
                            <input type='text' className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='mobile' id='mobile' value={stdDetails.mobile} onChange={onChange} placeholder='Mobile' />

                            <select className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' defaultValue={'DEFAULT'} onChange={onChange} name='fees' id='fees'>
                                <option value={'DEFAULT'} disabled>Fees</option>
                                {courses.map((course)=>{
                                    return (
                                        <option key={course._id} value={course.fees}>{course.fees}</option>
                                    )
                                })}

                            </select>
                        </div>

                        <div className='flex items-center justify-center py-3'>
                            <input type='text' className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='college' id='college' value={stdDetails.college} onChange={onChange} placeholder='College' />

                            <select className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' defaultValue={'DEFAULT'} onChange={onChange} name='duration' id='duration'>
                                <option className="fw-lighter" value={'DEFAULT'} disabled >Duration</option>
                                {courses.map((course)=>{
                                    return (
                                        <option key={course._id} value={course.duration}>{course.duration}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className='flex items-center justify-center py-2'>
                            <textarea className='border-2 rounded-md px-2 border-slate-400' name='query' style={{ width: '29rem' }} onChange={onChange} value={stdDetails.query}  placeholder='write query' />
                        </div>

                        <div className='flex items-center justify-center py-8'>
                            <button type='submit'  className='border-2 rounded-md px-2 py-2 bg-blue-500 hover:bg-blue-800 text-white' style={{ width: '29rem' }}>Submit</button>
                        </div>
                        <hr className='border-slate-300'/>
                        <div className='flex items-center justify-end py-2 px-9'>
                            <button type='button' ref={closeForm} onClick={()=>props.FormDisplay()} className='border-2 rounded-md px-2 py-2 bg-red-500 hover:bg-red-800 text-white'>Close</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentFrom