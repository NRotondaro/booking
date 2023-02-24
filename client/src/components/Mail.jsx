const Mail = () => {
  return (
    <div className='w-full flex flex-col items-center mt-14 p-14 gap-6 bg-primary text-white'>
      <h1 className='text-lg font-bold'>Save time, save money!</h1>
      <h2 className='text-lg font-semibold'>Sign up and we'll send the best deals to you</h2>
      <div className='mailinputcontainer'>
        <input
          className='w-80 h-10 p-2.5 text-black border-none outline-none mr-2.5 rounded-md'
          type='text'
          placeholder='Your email'
        />
        <button className='bg-activeBlue font-semibold rounded-md cursor-pointer px-6 py-2'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Mail;
