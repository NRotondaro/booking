import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Mail from '../components/Mail';
import Footer from '../components/Footer';

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='flex items-center flex-col mt-2.5'>
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
            <div className='w-1/3 p-1'>
              <img
                className='w-full object-cover'
                src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/259179689.jpg?k=928878b4d374884f7f62d79f3e52642fe3ad37b25f79cfcc5f5fe54062b11595&o=&hp=1'
                alt=''
              />
            </div>
            <div className='w-1/3 p-1'>
              <img
                className='w-full object-cover'
                src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/259179689.jpg?k=928878b4d374884f7f62d79f3e52642fe3ad37b25f79cfcc5f5fe54062b11595&o=&hp=1'
                alt=''
              />
            </div>
            <div className='w-1/3 p-1'>
              <img
                className='w-full object-cover'
                src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/259179689.jpg?k=928878b4d374884f7f62d79f3e52642fe3ad37b25f79cfcc5f5fe54062b11595&o=&hp=1'
                alt=''
              />
            </div>
            <div className='w-1/3 p-1'>
              <img
                className='w-full object-cover'
                src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/259179689.jpg?k=928878b4d374884f7f62d79f3e52642fe3ad37b25f79cfcc5f5fe54062b11595&o=&hp=1'
                alt=''
              />
            </div>
            <div className='w-1/3 p-1'>
              <img
                className='w-full object-cover'
                src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/259179689.jpg?k=928878b4d374884f7f62d79f3e52642fe3ad37b25f79cfcc5f5fe54062b11595&o=&hp=1'
                alt=''
              />
            </div>
            <div className='w-1/3 p-1'>
              <img
                className='w-full object-cover'
                src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/259179689.jpg?k=928878b4d374884f7f62d79f3e52642fe3ad37b25f79cfcc5f5fe54062b11595&o=&hp=1'
                alt=''
              />
            </div>
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
