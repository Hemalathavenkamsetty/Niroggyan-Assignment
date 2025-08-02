import React from 'react';
import {useParams,Link} from 'react-router-dom';
import {doctors} from '../data';
import {Doctor} from '../types'; 

const DoctorProfile: React.FC = () => {
    const{id} = useParams();
    const doctor:Doctor | undefined = doctors.find((d)=>d.id === id);

    if (!doctor){
        return <div>Doctor not found</div>; 
    } 

    return (
        <div className="p-4">
            <img src={doctor.profileImage} alt={doctor.name} className="w-full h-60 object-cover rounded-md mb-4" /> 
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
            <p>Availability:{doctor.availability}</p>
            <Link to={'/book-appointment/${doctor.id}'} className="text-blue-500">Book Appointment</Link>
            <br /> 
        </div>
    );
}; 

export default DoctorProfile;
