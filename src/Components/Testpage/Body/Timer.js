import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ValueContext } from "../../../Context";

export default function Timer() {
  const { handleSubmit, time } = useContext(ValueContext);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(time);
  const navigate = useNavigate();

  const updateTime = () => {
    if (minutes === 0 && seconds === 0) {
      setSeconds(0);
      handleSubmit();
      navigate("/result");
    } else if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    const token = setTimeout(() => {
      updateTime();
    }, 1000);
    return () => {
      clearTimeout(token);
    };
  });
  return (
    <div>
      <h1>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
}
