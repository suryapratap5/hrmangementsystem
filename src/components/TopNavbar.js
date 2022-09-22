import { faBars, faGear, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useContext} from 'react'
import studentContext from '../Context/studentContext'

const TopNavbar = (props) => {

  const Context = useContext(studentContext)
    const {message, type} = Context

  return (
    <div className='flex justify-between items-center  ml-72 mt-4 ' style={{width : '75vw'}}>
        <div className='pl-3'><pre>{props.title}</pre></div>
        <pre className={`text-${type}-800 bg-slate-300 px-2`}>{message}</pre>
        <ul className='w-20 flex justify-around'>
          <li className=''><FontAwesomeIcon icon={faGear}/></li>
          <li className='hidden'><FontAwesomeIcon icon={faBars}/></li>
          <li className='hidden'><FontAwesomeIcon icon={faXmark}/></li>
        </ul>
    </div>
  )
}

export default TopNavbar