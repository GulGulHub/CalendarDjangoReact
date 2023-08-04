import React, { useState } from 'react';
import Days from './Days';
import Months from './Months';
import AppointmentPopup from '../Popup/AppointmentPopup';

function Calender() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('appointments')) || {}
  );

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setShowPopup(true);
  };

  const handleSaveAppointment = (date, appointment) => {
    const dateString = date.toDateString();
    setAppointments((prevAppointments) => ({
      ...prevAppointments,
      [dateString]: appointment,
    }));
    localStorage.setItem(
      'appointments',
      JSON.stringify({ ...appointments, [dateString]: appointment })
    );
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="h-full ">
      <div id="calender-wrapper" className="h-full border-2 border-green-500">
        <div id="Calender" className="text-3xl font-bold hover:text-gray-700 text-center p-2">
          <div className="flex items-center justify-center">
            <Months currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
          </div>
        </div>
        <div id="table_wrapper" className="">
          <table id="my-calender" className="w-full h-full">
            <tbody className="bg-transparent">
              {/* Pass the 'appointments' prop to the 'Days' component */}
              <Days currentMonth={currentMonth} onDayClick={handleDayClick} appointments={appointments} />
            </tbody>
          </table>
        </div>
      </div>
      {showPopup && (
        <AppointmentPopup
          selectedDate={selectedDate}
          currentMonth={currentMonth}
          appointments={appointments}
          onClose={handleClosePopup}
          onSave={handleSaveAppointment}
        />
      )}
    </div>
  );
}

export default Calender;
