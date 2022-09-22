import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import studentContext from '../Context/studentContext'

const TopView = (props) => {

    

    return (
        <>
            <div className='bg-white ml-72 mt-8 rounded-t-md' style={{ width: '75vw' }}>
                <div className='text-right mr-3 py-3'>
                    <button type='button' className='bg-black text-white px-4 py-2 rounded-md' onClick={()=>props.FormDisplay()} ><span>+ </span>Add {props.name}</button>
                </div>
                <div className='text-white absolute -top-5 left-4 rounded-lg text-center bg-blue-600 shadow-lg shadow-cyan-500/50 h-14 w-14'>
                    <FontAwesomeIcon className='my-4' icon={faArrowDownWideShort}/>
                </div>
            </div>
        </>
    )
}

export default TopView