import React, { useState, useRef, useEffect } from "react";

const PhoneVerificationPopup = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value !== "") {
        if (index === 5) {
          inputRefs.current[index].blur();
        } else {
          inputRefs.current[index + 1].focus();
        }
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, 6)
      .split("");
    const newOTP = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOTP[i] = pastedData[i];
    }
    setOTP(newOTP);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "Backspace" && index > 0) {
      const newOTP = [...otp];
      newOTP[index] = "";
      setOTP(newOTP);
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="popup">
      <h3>Phone Verification</h3>
      <div className="otp-inputs">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>
      <button>Verify</button>
    </div>
  );
};

export default PhoneVerificationPopup;

