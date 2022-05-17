import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Mail from '../components/Mail';
import Footer from '../components/Footer';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? (
        'Loading please wait!'
      ) : (
        <div className='flex items-center flex-col mt-2.5'>
          {open && (
            <div className='sticky top-0 left-0 flex items-center w-screen h-screen bg-black/75 z-50'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='absolute top-5 right-5 text-3xl text-lightBlue cursor-pointer'
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className='text-lightBlue cursor-pointer m-5 text-3xl'
                onClick={() => handleMove('l')}
              />
              <div className='w-full h-full justify-center items-center flex'>
                <img
                  className='w-4/5 h-5/6'
                  src={data?.photos[slideNumber]}
                  alt=''
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className='text-lightBlue cursor-pointer m-5 text-3xl'
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className='w-full max-w-6xl flex flex-col gap-2 relative'>
            <button className='absolute top-10 right-0 border-none py-2.5 px-5 bg-activeBlue hover:bg-primary text-white rounded-md font-bold cursor-pointer'>
              Reserve or Book Now
            </button>
            <h2 className='text-2xl font-bold'>{data?.name}</h2>
            <div className='text-xs flex items-center space-x-2'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data?.address}</span>
            </div>
            <span className='text-activeBlue font-semibold'>
              Excellent location - {data?.distance}m from center
            </span>
            <span className='text-green font-semibold'>
              Book a stay over ${data?.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className='flex flex-wrap justify-between'>
              {data?.photos?.map((photo, i) => (
                <div className='w-1/3 p-1'>
                  <img
                    className='w-full object-cover'
                    src={photo}
                    alt='hotel'
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>
            <div className='flex justify-between gap-5 mt-5'>
              <div className='basis-3/4'>
                <h2 className='text-2xl font-bold'>{data?.title}</h2>
                <p className='text-sm mt-5'>{data?.desc}</p>
              </div>
              <div className='basis-1/4 bg-lightBlue flex flex-col gap-5 p-5'>
                <h2 className='text-lg text-gray font-bold'>
                  Perfect for a 9-night stay!
                </h2>
                <span className='text-sm'>
                  Located in the real heart of Krakow, excellent location score
                  of 9.8!
                </span>
                <h3 className='font-bold'>
                  $945 <span className='font-light'>(9 nights)</span>
                </h3>
                <button className='border-none py-2.5 px-5 bg-activeBlue hover:bg-primary text-white rounded-md font-bold cursor-pointer'>
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
          <Mail />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
