import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faUser,
  faPlane,
  faTaxi,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useClickAway } from 'use-click-away';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const clickRef = useRef('');

  const toggleCalendar = () => {
    setOpenDate(!openDate);
  };

  const toggleOptions = () => {
    setOpenOptions(!openOptions);
  };

  useClickAway(clickRef, () => {
    setOpenDate(false);
    setOpenOptions(false);
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <header className='bg-primary text-white flex justify-center'>
      <div className='w-full max-w-6xl mb-20 relative'>
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
        <button className='btn-secondary'>Sign in / Register</button>
        <div className='h-16 w-full max-w-6xl py-1 bg-yellow flex justify-between rounded-sm absolute -bottom-28 text-black shadow-xl'>
          <div className='bg-white w-full h-full flex items-center ml-1 pl-3 gap-2.5'>
            <FontAwesomeIcon icon={faBed} className='text-gray-400' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='outline-none placeholder:text-black'
            />
          </div>
          <div className='bg-white w-full h-full relative flex items-center gap-2.5 cursor-pointer'>
            <FontAwesomeIcon icon={faCalendarDays} className='text-gray-400' />
            <span
              ref={clickRef}
              onClick={toggleCalendar}
              className='headerserachtext'
            >{`${format(date[0].startDate, 'MM/dd/yyy')} to ${format(
              date[0].endDate,
              'MM/dd/yyy'
            )}`}</span>
            {openDate && (
              <span>
                <DateRange
                  className='absolute top-[60px] left-0'
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              </span>
            )}
          </div>
          <div className='bg-white w-full h-full flex items-center gap-2.5 cursor-pointer'>
            <FontAwesomeIcon icon={faUser} className='text-gray-400' />
            <span
              ref={clickRef}
              onClick={toggleOptions}
            >{`${options.adult} adult · ${options.children} children ${options.room} room`}</span>
            {openOptions && (
              <div className='absolute top-16 bg-white rounded-md shadow-sm'>
                <div className='w-48 flex justify-between m-2.5'>
                  <span className='option text'>Adult</span>
                  <div className='flex items-center gap-2.5 text-sm'>
                    <button
                      disabled={options.adult <= 1}
                      className='btn-operator'
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span className='option counter number'>
                      {options.adult}
                    </span>
                    <button
                      className='btn-operator'
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='w-48 flex justify-between m-2.5'>
                  <span className='option text'>Children</span>
                  <div className='flex items-center gap-2.5 text-sm'>
                    <button
                      className='btn-operator'
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span className='option counter number'>
                      {options.children}
                    </span>
                    <button
                      disabled={options.children <= 0}
                      className='btn-operator'
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='w-48 flex justify-between m-2.5'>
                  <span className='option text'>Room</span>
                  <div className='flex items-center gap-2.5 text-sm'>
                    <button
                      disabled={options.room <= 1}
                      className='btn-operator'
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span className='option counter number'>
                      {options.room}
                    </span>
                    <button
                      className='btn-operator'
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button className='btn-secondary py-3.5 mr-1'>Search</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
