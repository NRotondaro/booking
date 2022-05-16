import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../components/SearchItem';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='flex justify-center mt-5'>
        <div className='w-full max-w-6xl flex gap-5'>
          <div className='basis-1/4 bg-yellow p-2.5 rounded-md sticky h-max top-2.5'>
            <h1 className='text-xl text-gray mb-2.5'>Search</h1>
            <div className='flex flex-col gap-1 mb-2.5'>
              <label className='text-sm' htmlFor=''>
                Destination
              </label>
              <input
                className='h-8 border-none p-1'
                placeholder={destination}
                type='text'
              />
            </div>
            <div className='flex flex-col gap-1 mb-2.5'>
              <label className='text-sm'>Check-in Date</label>
              <span
                className='h-8 p-1 bg-white flex items-center cursor-pointer'
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, 'E, MMM d')} - ${format(
                date[0].endDate,
                'E, MMM d'
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className='flex flex-col gap-1 mb-2.5'>
              <label>Options</label>
              <div className='p-2.5'>
                <div className='flex justify-between mb-2.5 text-gray text-xs'>
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='w-8' />
                </div>
                <div className='flex justify-between mb-2.5 text-gray text-xs'>
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='w-8' />
                </div>
                <div className='flex justify-between mb-2.5 text-gray text-xs'>
                  <span>Adult</span>
                  <input
                    type='number'
                    min={1}
                    placeholder={options.adult}
                    className='w-8'
                  />
                </div>
                <div className='flex justify-between mb-2.5 text-gray text-xs'>
                  <span>Children</span>
                  <input
                    type='number'
                    min={0}
                    placeholder={options.children}
                    className='w-8'
                  />
                </div>
                <div className='flex justify-between mb-2.5 text-gray text-xs'>
                  <span>Room</span>
                  <input
                    type='number'
                    min={1}
                    placeholder={options.room}
                    className='w-8'
                  />
                </div>
              </div>
            </div>
            <button className='p-2.5 bg-activeBlue text-white border-none w-full font-semibold cursor-pointer hover:bg-primary'>
              Search
            </button>
          </div>
          <div className='basis-3/4'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;