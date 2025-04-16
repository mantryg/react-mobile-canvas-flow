
import '../styles/AppointmentList.css';

interface AppointmentListProps {
  onMedicClaim: () => void;
  onCashPayment: () => void;
}

const AppointmentList = ({ onMedicClaim, onCashPayment }: AppointmentListProps) => {
  // Sample appointment data
  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Ajay Rishi-Khanna-ENT',
      procedure: 'Adenotonsillectomy-ENT',
      date: '16-04-2025',
      time: '18:40:12',
      location: 'OT 4 - SHPL',
      status: 'Completed',
      assignedTo: 'Arun',
      action: 'Medi Claim'
    },
    {
      id: 2,
      doctor: 'Dr. Ajay Rishi-Khanna-ENT',
      procedure: 'Adenotonsillectomy-ENT',
      date: '16-04-2025',
      time: '18:40:12',
      location: 'OT 4 - SHPL',
      status: 'Completed',
      assignedTo: 'Arun',
      action: 'Implant'
    },
    {
      id: 3,
      doctor: 'Dr. Ajay Rishi-Khanna-ENT',
      procedure: 'Adenotonsillectomy-ENT',
      date: '16-04-2025',
      time: '18:40:12',
      location: 'OT 4 - SHPL',
      status: 'Completed',
      assignedTo: 'Arun',
      action: 'Medi Claim'
    }
  ];

  const handleActionClick = (action: string) => {
    if (action === 'Medi Claim') {
      onMedicClaim();
    } else if (action === 'Cash Payment') {
      onCashPayment();
    }
  };

  return (
    <div className="appointments-container">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="appointment-card">
          <div className="appointment-header">
            <div className="doctor-info">
              <div className="doctor-name">{appointment.doctor}</div>
              <div className="status">{appointment.status}</div>
            </div>
          </div>
          
          <div className="appointment-details">
            <div className="procedure-info">
              <i className="procedure-icon">✕</i>
              <span>{appointment.procedure}</span>
            </div>
            
            <div className="date-info">
              <i className="date-icon">📅</i>
              <span>{appointment.date}</span>
            </div>
            
            <div className="time-info">
              <i className="time-icon">⏱</i>
              <span>{appointment.time}</span>
            </div>
            
            <div className="location-info">
              <span>{appointment.location}</span>
              <div className="assigned-to">{appointment.assignedTo}</div>
            </div>
          </div>
          
          <div className="appointment-actions">
            <button 
              className={`action-button ${appointment.action.toLowerCase().replace(' ', '-')}`}
              onClick={() => handleActionClick(appointment.action)}
            >
              {appointment.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
