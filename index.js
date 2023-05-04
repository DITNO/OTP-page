import React, { useState, useRef, useEffect } from "react";

const PhoneVerificationPopup = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  
