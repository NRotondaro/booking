import useFetch from '../hooks/useFetch';
import Spinner from './Spinner';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');

  const images = [
    'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg',
    'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg',
  ];
  return (
    <div className='flex w-full max-w-6xl justify-between gap-5'>
      {error && 'Something went wrong, please try again later.'}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className='rounded-md overflow-hidden cursor-pointer flex-1' key={i}>
                <img src={img} className='w-full h-40 object-cover' alt='property' />
                <div>
                  <h1 className='text-lg font-bold capitalize'>{data[i]?.type}</h1>
                  <h1 className='text-sm font-light'>
                    {data[i]?.count} {data[i]?.type}
                    {data[i]?.count > 1 && 's'}
                  </h1>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
