import React from 'react';
import {Doctor} from '../types';
import {Link} from 'react-router-dom' 

interface DoctorListProps {
    doctors: Doctor[];
} 

const DoctorList:React.FC<DoctorListProps> = ({doctors}) => {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doctor)=>(
                <div key={doctor.id} className="border p-4 rounded-lg">
                    <img src = {doctor.profileImage} alt = {doctor.name} className ="w-full h-40 object-cover rounded-md mb-2" /> 
                    <h2>{doctor.name}</h2>
                    <p>{doctor.specialization}</p>
                    <p>Status:{doctor.availability}</p>
                    <Link to= {'/doctor/${doctor.id}'} className="text-blue-500">View Profile</Link>
                </div>
            ))}
        </div> 
            
        
    );

}; 

export default DoctorList; 
