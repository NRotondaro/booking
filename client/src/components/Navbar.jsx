const Navbar = () => {
  return (
    <div className='bg-primary p-8 h-16 flex justify-center'>
      <div className='w-full max-w-6xl flex items-center text-white justify-between'>
        <a href='/' className='font-bold text-2xl pl-4'>
          Booking.com
        </a>
        <div>
          <button className='btn-primary'>Register</button>
          <button className='btn-primary'>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;