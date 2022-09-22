import React, {useContext,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import studentContext from '../Context/studentContext'

const Signin = () => {

  const navigate = useNavigate();
  const Context = useContext(studentContext)
  const {message,setMessage, type, setType} = Context;

  const [credentials, setCredentials] = useState({email : "", password: ""})

  const onChange = (e)=>{
    
    setCredentials({...credentials, [e.target.name] : e.target.value})
  }
  
  const handleSubmit = async(e)=>{
    e.preventDefault();

    const {email, password} = credentials;

    const response = await fetch('http://localhost:4000/auth/signin',{
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({email, password})
    })

    const result = await response.json();

    console.log(result)
  
    

    if(result.success){
      localStorage.setItem('token', result.access_token);
      navigate('/dashboard');
      setMessage(result.message)
      setType("green");

      setTimeout(() => {
        setMessage("")
        setType("")
      }, 3000);

    }else{
      navigate('/');
      setMessage(result.message);
      setType("red")
      setTimeout(() => {
        setMessage("")
        setType("");
      }, 3000);
    }

  }


  return (
    <div className='relative' style={{ width: '100vw', height: '100vh' }}>
      <div className="signin text-red-700 py-8">
        <div className='h-14 mx-auto rounded-lg flex items-center  justify-between' style={{ width: '80vw', background: 'rgb(226 232 240)' }}>
          <h4 className=' font-bold ml-10'>Hr Management System</h4>
          <span className={`mr-4 text-${type}-800`}>{message}</span>
        </div>

        <div className='bg-white border-2 border-red-100 text-center mx-auto mt-14 pt-20 pb-16 rounded-xl relative' style={{ width: '30vw'}} >
          <div className='absolute -top-8 left-8 bg-red-800 h-20 flex items-center justify-center rounded-xl' style={{width:'25vw'}}>
            <h4 className='text-white text-xl'>Sign in</h4>
          </div>
          <div className='signin-form relative'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center text-blue-800'>
  
              <input type='email' placeholder='username' value={credentials.email} name='email' onChange={onChange} className='w-72 my-2 bg-transparent outline-2 outline-pink-500 border-2 border-blue-800 pl-3 py-1 rounded-md'  />

              <input type='password' placeholder='passowrd' value={credentials.password} name='password' onChange={onChange} className='w-72 my-2 bg-transparent outline-2 outline-pink-500 border-2 border-blue-800 pl-3 py-1 rounded-md'  />

              <button type='submit' className='w-72 my-6 bg-transparent outline-2 outline-pink-500 border-2 bg-blue-800 pl-3 py-1 text-white rounded-md hover:bg-blue-700 '>Submit</button>
            </form>
            <div>
              <span className='text-gray-700 px-1 '>Don't have an account?</span>
              <Link className='hover:border hover:bg-pink-700 ml-2 hover:text-white hover:rounded-xl hover:px-1 py-1' to='/signup'>Signup</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin