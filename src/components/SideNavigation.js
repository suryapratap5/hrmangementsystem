import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faDashboard, faPeopleArrows, faPersonRifle, faSignOut, } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const active = {
        background : 'bg-red-500'
    }

    const location = useLocation();
    

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <>
            <aside className='md:fixed bg-black text-white rounded-md top-4 left-4 w-64 ' style={{ height: '95vh' }}>
                <div className='text-center top-6 mb-14'>
                    <h4 className=''>Hr Management System</h4>
                </div>
                <hr />

                <div>
                    <div className='px-10'>
                        <Link className={`flex justify-center ${location.pathname==='/dashboard' ? active.background : ''}  py-2 my-4 rounded-md w-44 hover:bg-slate-600`} to='/dashboard'>
                            <div className='mr-3'><FontAwesomeIcon icon={faDashboard} /></div>
                            <ul className='mr-2'><li>Dashboard</li></ul>
                        </Link>
                    </div>

                    <div className='px-10'>
                        <Link className={`flex justify-center py-2 ${location.pathname==='/viewstudents' ? active.background : ''} my-4 rounded-md w-44 hover:bg-slate-600`} to='/viewstudents'>
                            <div className='mr-3'><FontAwesomeIcon icon={faPeopleArrows} /></div>
                            <ul className='mr-2'><li>All Students</li></ul>
                        </Link>
                    </div>

                    <div className='px-10'>
                        <Link className={`flex justify-center ${location.pathname==='/courses' ? active.background : ''} py-2 my-4 rounded-md w-44 hover:bg-slate-600`} to='/courses'>
                            <div className='mr-3'><FontAwesomeIcon icon={faCalendar} /></div>
                            <ul className='mr-8'><li>Courses</li></ul>
                        </Link>
                    </div>
                </div>

                <div className='text-center mr-8 pt-6'>
                    <h5 className='text-xs font-bold font-serif'>ACCOUNT PAGES</h5>
                </div>

                <div className='px-8'>
                    <Link className={`flex justify-center ${location.pathname==='/profile' ? active.background : ''}  py-2 my-4 rounded-md w-44 hover:bg-slate-600`} to='/profile'>
                        <div className='mr-3'><FontAwesomeIcon icon={faPersonRifle} /></div>
                        <ul className='mr-8'><li>Profile</li></ul>
                    </Link>
                </div>


                <div className='px-8 mt-40'>
                    <button type='button' onClick={handleLogout} className='flex justify-center bg-red-600 py-2 my-4 rounded-md w-44 hover:bg-slate-600'>
                        <div className='mr-3'><FontAwesomeIcon icon={faSignOut} /></div>
                        <ul className='mr-8'><li>Logout</li></ul>
                    </button>
                </div>


            </aside>
        </>

    )
}

export default Navbar