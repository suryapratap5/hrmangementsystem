import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './components/Courses';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Viewstudents from './components/Viewstudents';
import StudentState from './Context/StudentState';
// import { useState, useEffect } from 'react';

function App() {

  

  return (
    <>

      <StudentState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/viewstudents' element={<Viewstudents />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </StudentState>
    </>
  );
}

export default App;
