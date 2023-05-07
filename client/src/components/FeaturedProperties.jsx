import useFetch from '../hooks/useFetch';
import Spinner from './Spinner';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=2&min=1&max=200');

  console.log(data);
  return (
    <div className='flex gap-5 self-start'>
      {error && 'Something went wrong, please try again later.'}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data.map((item) => (
            <div className='flex flex-col flex-1 gap-2.5' key={item._id}>
              {item.photos && (
                <img src={item.photos[0]} alt='featured-property' className='w-full' />
              )}
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
