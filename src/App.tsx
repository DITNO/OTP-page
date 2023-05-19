import { useState } from 'react';
import OtpInput from './component/OtpInput';
import './App.css';
//main tsx
export default function App() {
  const [otp, setOtp] = useState('');
  const onChange = (value: string) => setOtp(value);

  return (
    <div className="container">
      <h1>Please enter OTP here</h1>
      <OtpInput value={otp} valueLength={6} onChange={onChange} />
      <button>Verify</button>
    </div>
  );
}
//source file
