import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='bg-primary text-white flex justify-center'>
      <div className='w-full max-w-6xl mb-20'>
        <div className='flex gap-4 mb-10'>
          <div className='li-primary'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='li-primary'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='li-primary'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='li-primary'>
            <FontAwesomeIcon icon={faUmbrellaBeach} />
            <span>Attractions</span>
          </div>
          <div className='li-primary'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='text-5xl font-bold'>
          A lifetime of discounts? It's Genius.
        </h1>
        <p className='my-8 text-2xl max-w-4xl'>
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Booking.com account
        </p>
        <button className='bg-activeBlue text-white text-lg border-none font-semibold py-3 px-6 cursor-pointer rounded-sm hover:bg-secondary'>
          Sign in / Register
        </button>
      </div>
    </header>
  );
};

export default Header;
