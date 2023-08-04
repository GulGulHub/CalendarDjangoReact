import React, { useEffect } from 'react';

function Days({ currentMonth, onDayClick, appointments }) {
  useEffect(() => {
    fillCalendar();
  }, [currentMonth]);

  const fillCalendar = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    let check_day = firstDay.getDay();
    let first_weekday = check_day === 0 ? 6 : check_day - 1;
    let counter = 1;

    const rows = [];
    let row = [];

    // Push empty cells for the days before the first day of the month
    for (let i = 0; i < first_weekday; i++) {
      row.push(<td key={`empty-${i}`}></td>);
    }

    while (counter <= lastDay.getDate()) {
      for (let i = first_weekday; i < 7; i++) {
        if (counter <= lastDay.getDate()) {
          const currentDate = new Date(
            currentMonth.getFullYear(),
            currentMonth.getMonth(),
            counter
          );

          const dateString = currentDate.toDateString();
          const hasAppointment = appointments[dateString];

          row.push(
            <td
              key={`day-${counter}`}
              className={`${
                hasAppointment ? 'neongreen-square ' : ''
              }bg-transparent bg-red-400 text-center cursor-pointer day-cell`}
              onClick={() => onDayClick(currentDate)}
            >
              {counter}
            </td>
          );

          counter += 1;
        }

        if (i === 6) {
          rows.push(<tr key={`row-${counter}`}>{row}</tr>);
          row = [];
        }
      }
      first_weekday = 0; // Reset first_weekday to 0 for the remaining weeks
    }

    return rows;
  };

  return (
    <table id="my-calendar" className="w-full h-full border-collapse">
      <thead>
        <tr>
          <th className="hidden lg:table-cell lg:text-s p-1">Monday</th>
          <th className="hidden lg:table-cell lg:text-s p-1">Tuesday</th>
          <th className="hidden lg:table-cell lg:text-s p-1">Wednesday</th>
          <th className="hidden lg:table-cell lg:text-s p-1">Thursday</th>
          <th className="hidden lg:table-cell lg:text-s p-1">Friday</th>
          <th className="hidden lg:table-cell lg:text-s p-1">Saturday</th>
          <th className="hidden lg:table-cell lg:text-s p-1">Sunday</th>
        </tr>
        {/* Abbreviated Weekday Headers for Small Screens */}
        <tr className="lg:hidden">
          <th className="p-1">M</th>
          <th className="p-1">T</th>
          <th className="p-1">W</th>
          <th className="p-1">T</th>
          <th className="p-1">F</th>
          <th className="p-1">S</th>
          <th className="p-1">S</th>
        </tr>
      </thead>
      <tbody className="bg-transparent">{fillCalendar()}</tbody>
    </table>
  );
}

export default Days;
