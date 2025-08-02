import React, {useState} from 'react';
import { useParams,useNavigate} from 'react-router-dom'; 
import {doctors} from '../data';
import { Appointment} from '../types'; 

const BookAppointment: React.FC = () => {
    const {id} = useParams();
    const doctor = doctors.find((d) => d.id === id);
    const navigate = useNavigate(); 

    const [patientName,setPatientName] = useState('');
    const [email,setEmail] = useState('');
    const [dataTime,setDataTime] = useState('');
    const [confirmation,setConfirmation] = useState('');

    if (!doctor){
        return <div>Doctor not found</div>;
    } 

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault(); 

        if (!patientName || !email || !dataTime){
            alert('Please fill in all fields.');
            return;
        } 

        const newAppoinment:Appointment = {
            id: Math.random().toString(36).substring(7),
            doctorId:doctor.id,
            patientName,
            email,
            dataTime,
        };

        setConfirmation(`Appoinment booked for ${patientName} with ${doctor.name} on ${dataTime}`); 

        setPatientName('');
        setEmail('');
        setDataTime(''); 

        setTimeout(()=>{
            navigate('/');
        },3000);

    }; 
    return (
        <div className="p-4">
            <h2>Book Appointment with {doctor.name}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Patient Name</label>
                    <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Date and Time:</label>
                    <input type="datetime-local" value={dataTime} onChange={(e) => setDataTime(e.target.value)} required />
                </div>
                <button type="submit">Book Appointment</button>
            </form> 
            {confirmation && <div>{confirmation}</div>}
        </div>
    );
}; 

export default BookAppointment;
