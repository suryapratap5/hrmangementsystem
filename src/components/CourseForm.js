import React, { useState, useContext, useRef } from 'react'
import studentContext from '../Context/studentContext';

const CourseForm = (props) => {

    const closeForm = useRef(null)

    const Context = useContext(studentContext)
    const {addCourse} = Context;
    console.log(Context);
    const [course, setCourse] = useState({course: '', fees :'', duration:'', comment: ''});

    const onChange = (e)=>{
        setCourse({...course, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addCourse(course)
        closeForm.current.click();
        setCourse({course: '', fees :'', duration:'', comment: ''})
    }

    return (
        <>
            <div className={`absolute top-0 left-0 z-10 bg-transparent ${props.display}`} style={{ width: '100vw', height: '100vh' }}>
                <div className='text-left bg-white text-slate-600 mx-auto border-2 border-slate-500 rounded-md' style={{ width: '43vw' }}>
                    <h3 className='font-bold py-5 pl-5 text-black'>Add Course here</h3>
                    <hr />
                    <div className='pt-4'>
                        <form onSubmit={handleSubmit}>

                            <div className='flex items-center justify-center py-3'>

                                <input type='text' value={course.course} onChange={onChange} className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='course' id='course' placeholder='Enter course' style={{ width: '29rem' }} />


                            </div>

                            <div className='flex items-center justify-center py-3'>

                                <input type='text' value={course.fees} onChange={onChange} className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='fees' id='fees' placeholder='Enter fees' style={{ width: '29rem' }} />

                            </div>

                            <div className='flex items-center justify-center py-3'>
                                <input type='text' value={course.duration} onChange={onChange} className='border-2  border-slate-400 mx-6 py-1 pl-1 text-black rounded-md w-52' name='duration' id='duration' placeholder='Duration' style={{ width: '29rem' }} />
                            </div>

                            <div className='flex items-center justify-center py-2'>
                                <textarea  value={course.query} onChange={onChange} className='border-2 rounded-md px-2 border-slate-400' name='comment' style={{ width: '29rem' }} placeholder='write query' />
                            </div>

                            <div className='flex items-center justify-center py-8'>
                                <button type='submit' className='border-2 rounded-md px-2 py-2 bg-blue-500 hover:bg-blue-800 text-white' style={{ width: '29rem' }}>Submit</button>
                            </div>

                            <hr className='border-slate-300' />
                            <div className='flex items-center justify-end py-2 px-9'>
                                <button type='button' ref={closeForm} onClick={() => props.FormDisplay()} className='border-2 rounded-md px-2 py-2 bg-red-500 hover:bg-red-800 text-white'>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseForm