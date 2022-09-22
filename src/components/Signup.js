import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import studentContext from '../Context/studentContext';

const Signup = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({name : "", email: "", password: ""});
    const Context = useContext(studentContext)
    const {message, setMessage, type, setType} = Context

    const onChange = async(e)=>{
        // console.log(typeof(e.target.value));
        // console.log(e.target.name);
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log('click')

        const {name, email, password} = credentials;
        console.log(credentials);

        const response = await fetch(`http://localhost:4000/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

        const result = await response.json();

        console.log(result);

        if(result.success){

            navigate('/');
            setMessage(result.message)
            setType("green")
            setTimeout(() => {
                setMessage("")
                setType("")
            }, 3000);

        }else{
            setMessage(result.message)
            setType("red")

            setTimeout(() => {
                setMessage("")
                setType("");
            }, 3000);
        }
        
    }

    return (
        <div className='' style={{ width: '100vw', height: '100vh' }}>
            <div className='relative'>


                <div className='flex'>
                    <div className='w-1/2 p-5 relative'>
                        <img className='rounded-xl' src='./img/illustration-signup.jpg' alt='bground' />
                    </div>
                    <div className='absolute top-4 left-0 h-12 rounded-lg mx-24 bg-white mt-3 flex items-center justify-between' style={{ width: '80vw' }} >
                        <h2 className='font-bold ml-4'>Material Dashboard</h2>
                        <span className={`mr-4 text-${type}-800`}>{message}</span>
                    </div>
                    <div className='signin-form w-1/2 flex justify-center items-center'>
                        <div className='text-center mx-auto'>
                            <div>
                                <div className='text-left pb-10 pl-10'>
                                    <h4 className='font-bold text-2xl'>Signup</h4>
                                    <span className='opacity-70'>Enter your personal information for registration</span>
                                </div>
                                <form onSubmit={handleSubmit} className='flex flex-col items-center'>

                                    <input type='text' value={credentials.name} onChange={onChange} placeholder='name' name='name'  className='w-72 my-2 bg-transparent outline-2 outline-pink-500 border-2 border-blue-800 pl-3 py-1 rounded-md' />

                                    <input type='email' value={credentials.email} onChange={onChange} placeholder='email' name='email' className='w-72 my-2 bg-transparent outline-2 outline-pink-500 border-2 border-blue-800 pl-3 py-1 rounded-md' />

                                    <input type='password' value={credentials.password} onChange={onChange} placeholder='passowrd' name='password' className='w-72 my-2 bg-transparent outline-2 outline-pink-500 border-2 border-blue-800 pl-3 py-1 rounded-md' />

                                    <button type='submit' className='w-72 my-6 bg-transparent outline-2 outline-pink-500 border-2 bg-blue-700 text-white pl-3 py-1 rounded-md hover:bg-blue-800'>Submit</button>
                                </form>
                            </div>
                            <div>
                                <span className='text-gray-700 px-1 '>Already have an account?</span>
                                <Link className='hover:border text-pink-800 hover:bg-pink-700 ml-2 hover:text-white hover:rounded-xl hover:px-1 py-1' to='/'>Signip</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup