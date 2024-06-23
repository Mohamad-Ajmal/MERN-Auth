import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function SingIn() {
  const [formDate, setFormFate] = useState({});
  const [error, setError] = useState(false);
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setFormFate({...formDate, [e.target.id]: e.target.value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      setLoding(true);
      setError(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formDate),
      });
      const data  = await res.json();
      setLoding(false);
      if(data.success == false){
        setError(true);
        return;
      }

      navigate('/')

    } catch (error) {
      setLoding(false);
      setError(true);
      
    }
    
  }




  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sing In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="Email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <input type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loding} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> {loding ? 'Loding...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have and account ?</p>
        <Link to='/sign-up'>
        <span className='text-blue-500'>Sign Up</span>
        </Link>
        
      </div>
      <p className='text-red-700 mt-5'>{error && "Something went wrong!"}</p>
    </div>
  )
}
