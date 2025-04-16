
import { useState } from 'react';
import '../styles/Dashboard.css';
import AppointmentList from './AppointmentList';
import DateFilter from './DateFilter';
import OTFilter from './OTFilter';
import Navigation from './Navigation';
import MedicClaimModal from './MedicClaimModal';
import CashPaymentModal from './CashPaymentModal';
import FilterButton from './FilterButton';

const Dashboard = () => {
  const [activeDate, setActiveDate] = useState('16');
  const [activeOT, setActiveOT] = useState('All');
  const [showMedicClaimModal, setShowMedicClaimModal] = useState(false);
  const [showCashPaymentModal, setShowCashPaymentModal] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  const dates = ['16', '17', '18', '19', '20', '21'];
  const otOptions = ['All', 'OT 1', 'OT 2', 'OT 3', 'OT 4'];

  const toggleMedicClaimModal = () => {
    setShowMedicClaimModal(!showMedicClaimModal);
    setShowCashPaymentModal(false);
  };

  const toggleCashPaymentModal = () => {
    setShowCashPaymentModal(!showCashPaymentModal);
    setShowMedicClaimModal(false);
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="dashboard-logo">Sahaj Hospital</div>
      </div>

      <div className="filters-container">
        <DateFilter 
          dates={dates} 
          activeDate={activeDate} 
          onSelectDate={setActiveDate} 
        />
        
        <OTFilter 
          otOptions={otOptions} 
          activeOT={activeOT} 
          onSelectOT={setActiveOT} 
        />
        
        <FilterButton onClick={toggleFilter} isVisible={filterVisible} />
      </div>

      {filterVisible && (
        <div className="filter-dropdown">
          <div className="filter-option">Doctor</div>
          <div className="filter-option">OT Clearance</div>
          <div className="filter-option">Booked</div>
          <div className="filter-option">Confirmed</div>
        </div>
      )}

      <AppointmentList 
        onMedicClaim={toggleMedicClaimModal} 
        onCashPayment={toggleCashPaymentModal}
      />

      {showMedicClaimModal && (
        <MedicClaimModal onClose={toggleMedicClaimModal} />
      )}

      {showCashPaymentModal && (
        <CashPaymentModal onClose={toggleCashPaymentModal} />
      )}

      <Navigation />
    </div>
  );
};

export default Dashboard;
