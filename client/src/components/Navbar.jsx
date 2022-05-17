import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='bg-primary p-8 h-16 flex justify-center'>
      <div className='w-full max-w-6xl flex items-center text-white justify-between'>
        <Link to='/'>
          <span className='font-bold text-2xl pl-4'>Booking.com</span>
        </Link>
        {user ? (
          <span className='capitalize'>{user.username}</span>
        ) : (
          <div>
            <button className='btn-primary'>Register</button>
            <button className='btn-primary'>Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
