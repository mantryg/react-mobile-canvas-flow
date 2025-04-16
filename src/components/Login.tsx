
import { useState } from 'react';
import '../styles/Login.css';
import Navigation from './Navigation';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleRequestOTP = () => {
    if (phoneNumber) {
      setShowOTPInput(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp) {
      onLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <div className="hospital-logo">Sahaj Hospital</div>
      </div>
      
      <div className="building-image-container">
        <div className="hospital-building">Hospital Building</div>
      </div>
      
      <div className="login-form">
        {!showOTPInput ? (
          <>
            <div className="phone-input-container">
              <div className="country-code">91</div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter Mobile Number"
                className="phone-input"
              />
            </div>
            <div className="action-text">Change Mobile Number</div>
            <button className="otp-button" onClick={handleRequestOTP}>
              Get OTP
            </button>
          </>
        ) : (
          <>
            <div className="otp-input-container">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="otp-input"
              />
            </div>
            <button className="verify-button" onClick={handleVerifyOTP}>
              Verify OTP
            </button>
          </>
        )}
      </div>
      
      <Navigation />
    </div>
  );
};

export default Login;
