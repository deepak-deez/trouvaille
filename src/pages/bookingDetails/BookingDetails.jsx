import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserBookingById } from "../../redux/slices/bookingSlice";
import "./style.scss";
import PassengerDetails from "../../components/bookignDetails/passengerDetails/PassengerDetails";
import { useDispatch, useSelector } from "react-redux";
export default function BookingDetails(props) {
  const { bookingData } = useSelector((state) => state.booking);
  const location = useLocation();
  const userDetail = location.state;
  const [userBookingDetails, setUserBookingDetails] = useState();
  const [success, setSuccess] = useState();
  const dispatch = useDispatch();

  const { FrontendUserData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!FrontendUserData) navigate("/");
  });

  useEffect(() => {
    dispatch(getUserBookingById(userDetail));
  }, []);

  if (bookingData) {
    return (
      <section className="booking-details pb-[5rem] min-h-screen">
        <section className="md:mx-20 xl:mx-44 min-[1920px]:mx-[20rem] pt-[100px]">
          <h1 className="text-center ">Trip details</h1>
          <div className="details-container md:p-10 mt-9">
            <div className="flex flex-col md:flex-row gap-5">
              <img
                className="md:w-[144px] md:h-[192px] m-auto rounded-2xl"
                src={bookingData?.data[0]?.tripDetails?.image}
                alt="trip-img"
              />
              <div className="w-full">
                <h2 className="text-white break-all text-[24px] font-[600] my-5">
                  {bookingData?.data[0]?.title}
                </h2>
                <div className="basic-information text-white lg:grid ">
                  <h4 className="mb-5">Basic Information</h4>
                  <div className="flex flex-wrap justify-between p-3">
                    <p className="break-all">
                      Full Name : <span>{bookingData?.data[0]?.name}</span>
                    </p>
                    <p className="break-all">
                      Email : <span>{bookingData?.data[0]?.email}</span>
                    </p>
                    <p className="break-all">
                      Address : <span>{bookingData?.data[0]?.address}</span>
                    </p>
                    <p className="break-all">
                      Phone Number : <span>{bookingData?.data[0]?.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 all-passenger-details">
              <h4>Other Passengers details</h4>
              <div className="mt-5 flex flex-wrap justify-between gap-10">
                {bookingData?.data[0]?.otherPassenger?.map((data, index) => {
                  return (
                    <PassengerDetails
                      firstName={data.firstName}
                      lastName={data.lastName}
                      gender={data.gender}
                      age={data.age}
                      count={index + 1}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
