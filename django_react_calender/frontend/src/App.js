import './App.css';
import Calender from './components/Calender/Calender.js'
/*import Appointment from './components/Appointment.js'*/
import {Todo} from './components/ToDo.js'
import UpcomingEvents from './components/UpcomingEvents.js'
import API1 from './components/API1.js'
import API2 from './components/API2.js'
import API3 from './components/API3.js'
import React, {useState} from 'react';



function App() {

  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('appointments')) || {}
  );

  const handleSaveAppointment = (updatedAppointments) => {
    setAppointments(updatedAppointments);
  };


  return (
    <div bg-auto 
    style={{backgroundImage: "url(${Background})"}}>
    <div className="grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 sm:grid-rows-6 sm:grid-cols-1 text-pink-500 lg:h-screen">

      <div className="lg:row-span-1 lg:col-span-1 sm:row-span-1 sm:col-span-1 border-2 border-green-500 overflow-y-auto">
        <UpcomingEvents appointments={appointments}/>
      </div>
      <div className="lg:row-span-2 lg:col-span-2 sm:row-span-1 sm:col-span-1 border-2 border-green-500">
        <Calender />
      </div>
      <div className="lg:row-span-1 lg:col-span-1 sm:row-span-1 sm:col-span-1 border-2 border-green-500">
        <Todo />
      </div>
      
      <div className="lg:row-span-1 lg:col-span-1 pt-5 sm:row-span-1 sm:col-span-1">
        <API1 />
      </div>
      <div className="lg:row-span-1 lg:col-span-1 pt-5 sm:row-span-1 sm:col-span-1">
        < API2 />
      </div>
      <div className="lg:row-span-1 lg:col-span-1 pt-5 sm:row-span-1 sm:col-span-1">
        <API3 />
      </div>
      <div className="credit-line text-xs text-green-500">
      Backgound-Photo by <a href="https://unsplash.com/@jeremythomasphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jeremy Thomas</a> on <a href="https://unsplash.com/photos/E0AHdsENmDg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>

    </div>
    </div>
  );
}

export default App;
