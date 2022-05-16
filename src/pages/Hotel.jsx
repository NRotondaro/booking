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

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
    },
  ];

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
                src={photos[slideNumber].src}
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
          <h2 className='text-2xl font-bold'>Grand Hotel</h2>
          <div className='text-xs flex items-center space-x-2'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className='text-activeBlue font-semibold'>
            Excellent location - 500 from center
          </span>
          <span className='text-green font-semibold'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='flex flex-wrap justify-between'>
            {photos.map((photo, i) => (
              <div className='w-1/3 p-1'>
                <img
                  className='w-full object-cover'
                  src={photo.src}
                  alt=''
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className='flex justify-between gap-5 mt-5'>
            <div className='basis-3/4'>
              <h2 className='text-2xl font-bold'>
                Stay in the heart of Krakow
              </h2>
              <p className='text-sm mt-5'>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free Wifi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microware a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered as well as an eletri tea pot and a coffe machine.
                popular points of interest near the apartment include Cloth
                Hall, Main Market Square and Town Hall Tower. The nearest
                airport is Jogn Paulo II International Krakow-Balice, 16.1 km
                from Tower Steer Apartments, and the property offers a paid
                airport shuttle service
              </p>
            </div>
            <div className='basis-1/4 bg-lightBlue flex flex-col gap-5 p-5'>
              <h2 className='text-lg text-gray font-bold'>
                Perfect for a 9-night stay!
              </h2>
              <span className='text-sm'>
                Located in the real heart of Krakow, excellent location score of
                9.8!
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
    </div>
  );
};

export default Hotel;
