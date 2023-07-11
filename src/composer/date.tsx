import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const DateComponent: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [nextMonthCalendarOpen, setNextMonthCalendarOpen] = useState(false);

  const handleDateClick = () => {
    setCalendarOpen(!calendarOpen);
    setNextMonthCalendarOpen(false);
  };

  const handleNextMonthClick = () => {
    setNextMonthCalendarOpen(!nextMonthCalendarOpen);
    setCalendarOpen(false);
  };

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      // Si vous souhaitez gérer une sélection de plage de dates
      // Vous pouvez mettre en œuvre votre logique ici
    } else {
      setCurrentDate(date as Date);
    }
  };

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div id="date" className='date'>
      <div>
        <button onClick={handleDateClick} id="date">
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
      </div>
      <div className="add-return">
        <button onClick={handleNextMonthClick} className='return'>Ajouter un retour</button>
      </div>
      {(calendarOpen || nextMonthCalendarOpen) && (
        <div className="calendars-container">
          {calendarOpen && (
            <Calendar value={currentDate} onClickDay={handleDateChange} className="calendar" />
          )}
          {nextMonthCalendarOpen && (
            <Calendar
              value={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)}
              onClickDay={handleDateChange}
              className="calendar"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DateComponent;
