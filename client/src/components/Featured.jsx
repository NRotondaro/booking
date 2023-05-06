import useFetch from '../hooks/useFetch';

const Featured = () => {
  const { data, loading, error } = useFetch('/hotels/countByCity?cities=maceio,recife,natal');

  return (
    <div className='w-full max-w-6xl flex justify-between gap-5 z-10'>
      {error && 'Something went wrong, please try again later.'}
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className='li-featured'>
            <img
              src='https://a.cdn-hotels.com/gdcs/production174/d1765/453dc120-19d4-4881-93ee-69b07087ecb7.jpg'
              className='w-full object-cover'
              alt='gramado'
            />
            <div className='absolute bottom-5 left-3'>
              <h2 className='text-2xl font-bold'>Maceió</h2>
              <h2 className='text-2xl font-bold'>{data[0]} properties</h2>
            </div>
          </div>
          <div className='li-featured'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/square250/653641.webp?k=29b8706ee4bff7b870ca35a698c5ac4be003b4122b00035a9d4a572d3101b1fe&o='
              className='w-full object-cover'
              alt=''
            />
            <div className='absolute bottom-5 left-3'>
              <h2 className='text-2xl font-bold'>Recife</h2>
              <h2 className='text-2xl font-bold'>{data[1]} properties</h2>
            </div>
          </div>
          <div className='li-featured'>
            <img
              src='https://cf.bstatic.com/xdata/images/city/square250/653646.webp?k=0a8eb3999748f5b12b29f6bd5492a12b7f15a37535e572ea91403098d1588d38&o='
              className='w-full object-cover'
              alt=''
            />
            <div className='absolute bottom-5 left-3'>
              <h2 className='text-2xl font-bold'>Natal</h2>
              <h2 className='text-2xl font-bold'>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
