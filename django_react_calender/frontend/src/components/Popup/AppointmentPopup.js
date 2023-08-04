import React, { useState } from 'react';
import axios from 'axios';

function AppointmentPopup({ selectedDate, onClose, onSave }) {
  const [appointment, setAppointment] = useState('');
  const [time, setTime] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'appointment') {
      setAppointment(value);
    } else if (name === 'time') {
      setTime(value);
    }
  };

  const handleSave = async () => {
    try {

      const timeString = time.toString();
      // Construct the appointment data to send in the POST request
      const appointmentData = {
        date: selectedDate.toDateString(),
        time: timeString,
        event: appointment,
      };

      let url = 'http://127.0.0.1:8000/api/PostAppointment/';


      // Make the POST request to your Django backend
      const response = await axios.post(url, appointmentData);

      // If the POST request is successful, you can handle the response here
      console.log('Appointment saved successfully:', response.data);

      // Call the onSave prop to notify the parent component of the saved appointment
      onSave(selectedDate, appointmentData);

      // Close the popup after saving the appointment
      onClose();
    } catch (error) {
      // Handle any errors that might occur during the POST request
      console.error('Error saving appointment:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Add Appointment</h3>
        <p className="mb-2">Selected Date: {selectedDate.toDateString()}</p>

        {/* Add input fields for time and message */}
        <input
          className="w-full p-2 border border-gray-300 rounded mb-2"
          type="time"
          name="time"
          value={time}
          onChange={handleInputChange}
        />
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded mb-2"
          placeholder="Enter your appointment..."
          name="appointment"
          value={appointment}
          onChange={handleInputChange}
        ></textarea>

        <div className="mt-2 flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-400 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentPopup;
