import React, {useState} from 'react';
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'; 
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import BookAppointment from './components/BookAppointment'; 
import {doctors} from './data'; 
import './App.css'; 

function App(){
    const [searchQuery,setSearchQuery] = useState('');
    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    ); 

    return (
        <Router>
            <div className="container">
                <h1>Healthcare Appointment Booking</h1>
                <input 
                  type = "text"
                  placeholder = "Search doctors..."
                  value = {searchQuery} 
                  onChange = {(e) => setSearchQuery(e.target.value)} 
                  className= "border p-2 mb-4"
                /> 
                <Routes>
                    <Route path='/' element={<DoctorList doctors ={filteredDoctors}/>} /> 
                    <Route path='/doctor/:Id' element={<DoctorProfile />} /> 
                    <Route path='/book-appointment/:id' element={<BookAppointment/>} /> 
                </Routes>
            </div>
        </Router>
    );
} 

export default App;
