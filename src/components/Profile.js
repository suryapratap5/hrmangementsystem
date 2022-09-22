import React from 'react'
import SideNavigation from './SideNavigation'
import TopNavbar from './TopNavbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile')
    } else {
      navigate('/')
    }
  }, [])


  return (
    <>
      <SideNavigation />
      <TopNavbar title={'Profile'} />
    </>
  )
}

export default Profile