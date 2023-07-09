import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const DateComponent: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarOpen, setCalendarOpen] = useState(false);
  
    const handleDateClick = () => {
      setCalendarOpen(!calendarOpen);
    };
    const handleDateChange = (date: Date | Date[]) => {
        if (Array.isArray(date)) {
          // Si vous souhaitez gérer une sélection de plage de dates
          // Vous pouvez mettre en œuvre votre logique ici
        } else {
          setCurrentDate(date as Date);
        }
      };
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
    return (
      <div id="date">
        <button onClick={handleDateClick} id='date'>
            <div onClick={handleDateClick}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M18 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h8V4a1 1 0 0 1 2 0v1zM5 10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5z"
                    fill="currentColor"
                    fillRule="evenodd"
                    ></path>
                </svg>
            </div>
        {formattedDate}
        </button>
        {calendarOpen && (
          <Calendar value={currentDate} onClickDay={setCurrentDate} />
        )}
      </div>
    );
  };
  
  export default DateComponent;
  