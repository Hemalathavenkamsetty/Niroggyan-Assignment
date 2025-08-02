export interface Doctor {
    id: string;
    name:string;
    specialization:string;
    profileImage: string;
    availability: 'available' | 'busy'|'on leave';
} 

export interface Appointment{
    id: string;
    doctorId: string;
    patientName: string; 
    email: string;
    dataTime: string;
} 
