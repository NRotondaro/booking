import useFetch from '../hooks/useFetch';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className='w-full max-w-6xl flex justify-between gap-5'>
      {error && 'Something went wrong, please try again later.'}
      {loading ? (
        'Loading please wait!'
      ) : (
        <>
          {data.map((item) => (
            <div className='flex flex-col flex-1 gap-2.5' key={item._id}>
              <img src={item.photos[0]} alt='featured-property' className='w-full' />
              <span className='font-bold'>{item.name}</span>
              <span className='font-light'>{item.city}</span>
              <span className='font-semibold'>Starting from ${item.cheapestPrice}</span>
              {item.rating && (
                <div>
                  <button className='bg-primary text-white border-none px-1 py-[2px] mr-2.5 font-bold'>
                    {item.rating}
                  </button>
                  <span className='text-sm'>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
