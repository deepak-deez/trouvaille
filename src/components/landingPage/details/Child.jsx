import React, { useState } from "react";
import "./child.scss";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/loginForm/arrow.svg";
import Success from "../successBox/Child";

const Header = () => {
  const [sucessModal, setsucessModal] = useState(false);
  const [passenger, setpassenger] = useState(false);
  return (
    <>
      <section className="flex flex-col details-form justify-center items-center">
        <h2 className="md:text-[64px] text-center mt-[10px] lg:mt-[30px] text-[50px]">
          Details about you
        </h2>
        <div className="flex flex-col lg:w-[975px] w-[90%] md:px-[30px] md:py-[30px] mt-[15px] details-container px-[25px] py-[15px] lg:py-[67px] lg:px-[97px] justify-center">
          <input
            className="input-fields lg:px-[39px] px-[15px] py-[20px] text-[20px] lg:py-[32px] mt-[9px]"
            type="text"
            placeholder="Full Name"
          />
          <input
            className=" input-fields lg:px-[39px] lg:py-[32px] text-[20px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] w-[100%]"
            type="text"
            placeholder="Phone Number"
          />
          <div className="flex input-fields items-center justify-between lg:mt-[60px] lg:px-[39px] px-[15px] mt-[30px]">
            <input className=" w-[100%] lg:py-[32px] py-[20px] bg-transparent text-[20px] other-passenger"
              type="text"
              placeholder="Other Passenger (number)"
            />
            <button
              onClick={() => {
                setpassenger(!passenger);
              }}
            >
              <img src={arrow} className={'rotate-180' + (passenger?'rotate-0':'')} alt="arrow-img" />
            </button>
          </div>
          {/* Passenger Starts */}
          <input
            className={
              " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] " +
              (passenger ? "" : "hidden")
            }
            type="text"
            placeholder="First Name"
          />

          <input
            className={
              " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] " +
              (passenger ? "" : "hidden")
            }
            type="text"
            placeholder="Last Name"
          />
          <input
            className={
              " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] " +
              (passenger ? "" : "hidden")
            }
            type="text"
            placeholder="Gender"
          />
          <input
            className={
              " input-fields lg:px-[39px] text-[20px] w-[100%] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] " +
              (passenger ? "" : "hidden")
            }
            type="text"
            placeholder="Age"
          />
          {/* Passenger Ends */}
          <input
            className=" input-fields text-[20px] w-[100%] lg:px-[39px] lg:py-[32px] px-[15px] py-[20px] lg:mt-[60px] mt-[30px] "
            type="text"
            placeholder="Address"
          />
          <p className="grey-text lg:mt-[60px] mt-[30px]">
            Remember to always be cautious when making payments online and to
            only provide your payment details to reputable and trusted travel
            companies or service providers.
          </p>
          <button
            onClick={() => {
              setsucessModal(!sucessModal);
            }}
            className="lg:mt-[60px] mt-[30px] px-[15px] py-[20px] lg:py-[24px] text-center continue-button"
          >
            SUBMIT
          </button>
        </div>
      </section>
      {sucessModal && <Success />}
    </>
  );
};

export default Header;
