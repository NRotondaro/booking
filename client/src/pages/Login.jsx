import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-2.5'>
        <input
          type='text'
          placeholder='username'
          id='username'
          onChange={handleChange}
          className='h-7 p-2.5 outline-none border-2 border-zinc-500 rounded-md'
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          onChange={handleChange}
          className='h-7 p-2.5 outline-none border-2 border-zinc-500 rounded-md'
        />
        <button
          disabled={loading}
          onClick={handleClick}
          className='border-none py-2.5 px-5 bg-activeBlue hover:bg-primary text-white font-bold cursor-pointer rounded-md disabled:bg-gray disabled:cursor-not-allowed'>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
