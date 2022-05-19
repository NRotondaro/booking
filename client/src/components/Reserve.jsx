import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../hooks/useFetch';
import { SearchContext } from '../context/SearchContext';
import axios from 'axios';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='w-screen h-screen bg-black/40 fixed left-0 top-0 flex items-center justify-center'>
      <div className='bg-white p-5 relative'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='absolute top-0 right-0 m-5 cursor-pointer'
          onClick={() => setOpen(false)}
        />
        <span className='font-bold'>Select your rooms:</span>
        {data.map((item) => (
          <div className='flex items-center gap-12 p-5'>
            <div className='flex flex-col gap-1'>
              <div className='font-medium'>{item.title}</div>
              <div className='font-light'>{item.desc}</div>
              <div className='text-xs'>
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className='font-medium'>{item.price}</div>
            </div>
            <div className='flex flex-wrap gap-1 text-[8px] text-gray'>
              {item.roomNumbers.map((roomNumber) => (
                <div className='flex flex-col'>
                  <label>{roomNumber.number}</label>
                  <input
                    type='checkbox'
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleClick}
          className='py-2.5 px-5 bg-activeBlue text-white font-bold cursor-pointer rounded-md w-full mt-5'
        >
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
