import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import { validEmail } from "../../../constants/regex";

const SetPassword = () => {
  const emailref = useRef();
  const [apiMessage, setApiMessage] = useState("");

  const handleEmailValidation = () => {
    try {
      if (!validEmail.test(emailref.current.value)) {
        throw new Error("Please Enter a valid E-mail!");
      } else {
        document.getElementById("validEmail").textContent = "";
      }
    } catch (err) {
      document.getElementById("validEmail").textContent = err.message;
    }
  };

  const sendLink = async () => {
    const data = {
      email: emailref.current.value,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_HOST}send-reset-mail/Frontend-user`,
        data
      );
      console.log(response.status, response);
      if (response.data.success) setApiMessage(response.data.message);
    } catch (err) {
      // console.log("Err:", err);
      if (err.response.data.success === false)
        setApiMessage(err.response.data.message);
    }
  };
  return (
    <header className="flex flex-col set-password justify-center items-center mt-[100px] my-auto">
      <h2 className="md:text-[40px] text-center mt-[10px] lg:mt-[30px] text-[28px]">
        Set profile password
      </h2>
      <div className="flex flex-col lg:w-[900px] w-[90%] md:px-[20px] md:py-[20px] mt-[15px] login-details px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
        <p
          className={
            "text-3xl text-center api-message " +
            (!!apiMessage.length ? "mb-5" : "")
          }
        >
          {apiMessage}
        </p>
        <input
          className="input-fields p-[2rem] mt-[9px] bg-transparent"
          type="text"
          ref={emailref}
          placeholder="Enter Your Email Address"
          onChange={handleEmailValidation}
        />
        <h4
          id="validEmail"
          className="text-red-800 bg-transparent text-xl"
        ></h4>
        <button
          to="/resetPassword"
          onClick={sendLink}
          className="lg:mt-[27px] mt-[20px] px-[15px] py-[20px] lg:py-[24px] text-center send-password-button"
        >
          SEND LINK
        </button>
      </div>
    </header>
  );
};

export default SetPassword;
