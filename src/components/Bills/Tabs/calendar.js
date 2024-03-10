import React, {useState} from 'react';
// import { format, addMonths, subMonths, getDaysInMonth, isLeapYear } from 'date-fns';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    setDate(prevDate => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => addMonths(prevDate, 1));
  };

  // const daysInMonth = getDaysInMonth(date);
  // const isCurrentYearLeapYear = isLeapYear(new Date());

  return (
    <div mycalendar="true">
      {/* <button onClick={handlePrevMonth}>Previous Month</button>
      <span>{format(date, 'MMMM yyyy')}</span>
      <button onClick={handleNextMonth}>Next Month</button> */}

      <Calendar 
        value={date}
        onChange={setDate}
        // minDate={subMonths(new Date(), 1)}
        // maxDate={addMonths(new Date(), 1)}
        // calendarType="ISO 8601"
        // tileDisabled={({ activeStartDate, date, view }) =>
        //   view === 'month' && (
        //     (date > daysInMonth && !isCurrentYearLeapYear) ||
        //     (date > 29 && !isCurrentYearLeapYear && format(activeStartDate, 'MMMM') === 'February')
        //   )
        // }
      />
    </div>
  );
};

export default CalendarComponent;
