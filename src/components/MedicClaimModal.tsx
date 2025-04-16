
import { useState } from 'react';
import '../styles/MedicClaimModal.css';

interface MedicClaimModalProps {
  onClose: () => void;
}

const MedicClaimModal = ({ onClose }: MedicClaimModalProps) => {
  const [tpa, setTpa] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [clearanceGiven, setClearanceGiven] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form submission
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Medi Claim Details</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="modal-description">Please fill in the details for Medi Claim.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="tpa">TPA</label>
              <select 
                id="tpa" 
                value={tpa} 
                onChange={(e) => setTpa(e.target.value)}
                className="form-select"
              >
                <option value="" disabled>Select TPA</option>
                <option value="tpa1">TPA 1</option>
                <option value="tpa2">TPA 2</option>
                <option value="tpa3">TPA 3</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="insurance">Insurance Company</label>
              <select 
                id="insurance" 
                value={insuranceCompany} 
                onChange={(e) => setInsuranceCompany(e.target.value)}
                className="form-select"
              >
                <option value="" disabled>Select insurance company</option>
                <option value="company1">Insurance Company 1</option>
                <option value="company2">Insurance Company 2</option>
                <option value="company3">Insurance Company 3</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="approval">Approval</label>
              <select 
                id="approval" 
                value={approvalStatus} 
                onChange={(e) => setApprovalStatus(e.target.value)}
                className="form-select"
              >
                <option value="" disabled>Select approval status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="clearance"
                checked={clearanceGiven}
                onChange={(e) => setClearanceGiven(e.target.checked)}
                className="form-checkbox"
              />
              <label htmlFor="clearance">Clearance Given</label>
            </div>
            
            <button type="submit" className="save-button">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicClaimModal;
