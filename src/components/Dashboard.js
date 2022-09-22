import { faAddressCard, faAngleLeft, faAngleRight, faArrowUp, faBell, faBookOpen, faCalendarDay, faCartShopping, faCheck, faKey, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import SideNavigation from './SideNavigation'
import { useContext } from 'react'
import TopNavbar from './TopNavbar'
import studentContext from '../Context/studentContext'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const Context = useContext(studentContext)
  let history = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      history("/dashboard")
    }
    else {
      history("/")
    }
  }, [])
  const { message } = Context;
  return (
    <>
      <SideNavigation />
      <TopNavbar title={'Dashboard'} message={message} />

      <div className='  ml-80 py-5' style={{ width: '75vw' }}>
        <div className='grid grid-cols-3'>
          <div className='h-32 w-60 bg-white shadow-slate-500 rounded-lg'>
            <div className='text-white border rounded-lg absolute left-4 -top-4 py-4 px-6 text-center bg-slate-800'><FontAwesomeIcon icon={faCalendarDay} /></div>
            <div className='ml-32 mt-3'>
              <div className='font-bold opacity-40 text-slate-800'>Total Enquiry</div>
              <div className='font-bold'>5</div>
            </div>
            <hr className='mt-10' />
          </div>
          <div className='h-32 w-60 bg-white shadow-slate-500 rounded-lg'>
            <div className='text-white border rounded-lg absolute left-4 -top-4 py-4 px-6 text-center bg-red-800'><FontAwesomeIcon icon={faBookOpen} /></div>
            <div className='ml-32 mt-3'>
              <div className='font-bold opacity-40 text-red-800'>Total Courses</div>
              <div className='font-bold'>5</div>
            </div>
            <hr className='mt-10' />
          </div>
          <div className='h-32 w-60 bg-white shadow-slate-500 rounded-lg'>
            <div className='text-white border rounded-lg absolute left-4 -top-4 py-4 px-6 text-center bg-blue-800'><FontAwesomeIcon icon={faUser} /></div>
            <div className='ml-28 mt-3'>
              <div className='font-bold opacity-40 text-blue-800'>Total Students</div>
              <div className='font-bold'>5</div>
            </div>
            <hr className='mt-10' />
          </div>
        </div>
      </div>

      <main className='ml-80 flex justify-between ' style={{ width: '72vw' }}>
        <div className=' bg-white rounded-md p-4' style={{ width: '48vw' }}>
          <h4 className='text-lg font-bold font-sans'>Our Courses</h4>
          <div className='flex py-3'>
            <div className='pr-4 text-blue-700'><FontAwesomeIcon icon={faCheck} /></div>
            <pre><em className='font-bold'>30 Done </em>this month</pre>
          </div>

          <div className='py-5'>
            <table className='grid grid-flow-row'>
              <thead className='grid grid-flow-row border-b-2'>
                <tr className='grid grid-cols-3'>
                  <th className='opacity-50'>Course Name</th>
                  <th className='opacity-50'>Fees </th>
                  <th className='opacity-50'>Duration</th>
                </tr>
              </thead>


              <tbody className='grid grid-flow-row'>
                <tr className='grid grid-cols-3 text-center border-b-2'>
                  <td className='opacity-50 flex items-center px-12'><img className='h-8 mr-3 -ml-3' src='/img/apple-icon.png' alt='python' />Python</td>
                  <td className='opacity-50'>35k </td>
                  <td className='opacity-50'>3 monts</td>
                </tr>

                <tr className='grid grid-cols-3 text-center border-b-2 py-1'>
                  <td className='opacity-50 flex items-center px-12'><img className='h-8 mr-3 -ml-3' src='/img/apple-icon.png' alt='python' />Python</td>
                  <td className='opacity-50'>35k </td>
                  <td className='opacity-50'>3 monts</td>
                </tr>




              </tbody>

            </table>

          </div>
        </div>



        <div className='bg-white rounded-md p-4' style={{ width: '22vw' }}>
          <h4 className='font-bold'>Course Overview</h4>
          <div className='flex items-center py-5'>
            <div className='text-blue-600 mr-3'><FontAwesomeIcon icon={faArrowUp} /></div>
            <pre>This is months</pre>
          </div>



          <div className='font-mono mt-6 py-7'>
            <div className='flex items-center py-5'>
              <div className='text-blue-600 mr-3'><FontAwesomeIcon icon={faBell} /></div>
              <div>
                <pre className='font-bold'>Rakesh Singh, Rs 5400</pre>
                <pre>22 Dec. 2022 12pm</pre>
              </div>
            </div>
            <div className='absolute left-2 top-20 flex-col h-16 opacity-50 border border-l-1 border-blue-500'></div>
            <div className='flex items-center py-5'>
              <div className='text-red-600 mr-3'>
                <FontAwesomeIcon icon={faAngleLeft} />
                <FontAwesomeIcon icon={faAngleRight} /></div>
              <div>
                <pre className='font-bold'>Rakesh Singh, Rs 5400</pre>
                <pre>22 Dec. 2022 12pm</pre>
              </div>
            </div>
            <div className='absolute left-2 top-44 flex-col h-16 opacity-50 border border-l-1 border-blue-500'></div>


            <div className='flex items-center py-5'>
              <div className='text-blue-600 mr-3'><FontAwesomeIcon icon={faCartShopping} /></div>
              <div>
                <pre className='font-bold'>Rakesh Singh, Rs 5400</pre>
                <pre>22 Dec. 2022 12pm</pre>
              </div>
            </div>

            <div className='absolute left-2 top-64 flex-col h-16 opacity-50 border border-l-1 border-blue-500'></div>

            <div className='flex items-center py-5'>
              <div className='text-orange-600 mr-3'><FontAwesomeIcon icon={faAddressCard} /></div>
              <div>
                <pre className='font-bold'>Rakesh Singh, Rs 5400</pre>
                <pre>22 Dec. 2022 12pm</pre>
              </div>
            </div>
            <div className='absolute left-2 bottom-44 flex-col h-16 opacity-50 border border-l-1 border-red-500'></div>

            <div className='flex items-center py-5'>
              <div className='text-pink-600 mr-3'><FontAwesomeIcon icon={faKey} /></div>
              <div>
                <pre className='font-bold'>Rakesh Singh, Rs 5400</pre>
                <pre>22 Dec. 2022 12pm</pre>
              </div>
            </div>
            <div className='absolute left-2 top-3/4 flex-col h-16 opacity-50 border border-l-1 border-blue-500'></div>

            <div className='flex items-center py-5'>
              <div className='text-blue-600 mr-3'><FontAwesomeIcon icon={faMoneyBill} /></div>
              <div>
                <pre className='font-bold'>Rakesh Singh, Rs 5400</pre>
                <pre>22 Dec. 2022 12pm</pre>
              </div>
            </div>

            <div className='absolute left-2 -bottom-1 flex-col h-16 opacity-50 border border-l-1 border-blue-500'></div>


          </div>
        </div>

      </main>
    </>
  )
}

export default Dashboard