
import { useState } from 'react';
import '../styles/CashPaymentModal.css';

interface CashPaymentModalProps {
  onClose: () => void;
}

const CashPaymentModal = ({ onClose }: CashPaymentModalProps) => {
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
          <h2>Cash Payment Details</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="modal-description">Please fill in the details for Cash Payment.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="cashClearance"
                checked={clearanceGiven}
                onChange={(e) => setClearanceGiven(e.target.checked)}
                className="form-checkbox"
              />
              <label htmlFor="cashClearance">Clearance Given</label>
            </div>
            
            <button type="submit" className="save-button">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CashPaymentModal;
