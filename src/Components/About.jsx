import React, { useState } from "react";
import { facilities } from "../constant/features";
import { useNavigate } from "react-router";


const AboutHotel = ({ hotel }) => {
    let navigate = useNavigate();
  const [nights, setNights] = useState(2);
  const pricePerNight = 280;
  const totalPrice = nights * pricePerNight;

  const increaseNights = () => setNights(nights + 1);
  const decreaseNights = () => {
    if (nights > 1) setNights(nights - 1);
  };

  return (
    <section className="wrapper px-4 md:px-0">
      <h4 className="text-lg md:text-2xl font-medium text-primary">
        Description
      </h4>
      <div className="flex flex-col lg:flex-row gap-4 pt-4">
        <div className="w-full max-w-full lg:max-w-[658px] pr-0 lg:pr-8">
          <p className="text-base leading-[27.2px] font-light text-secondary max-w-full lg:max-w-[600px]">
            {hotel.description}
          </p>

          {/* Facilities Section */}
          <div className="py-6 w-full max-w-full lg:max-w-[658px] flex flex-col gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facilities.map(({ img, label, count }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={img} alt={label} className="size-38 object-cover" />
                  <p className="text-lg leading-[30.6px] text-secondary">
                    <strong className="text-black">{count} </strong>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex-1 border p-4 lg:p-8">
          <h4 className="text-lg md:text-2xl leading-[36px] font-medium text-primary py-6">
            Start Booking
          </h4>
          <p className="text-xl md:text-[36px] leading-[30px] md:leading-[54px] font-medium">
            <span className="text-green">${pricePerNight} </span>per night
          </p>
          <p className="text-lg leading-[30px] pt-6">How long you will stay?</p>
          <div className="flex items-center gap-2">
            <button
              className="text-white text-center w-10 h-[51.56px] bg-[#E74C3C] flex items-center justify-center"
              onClick={decreaseNights}
            >
              -
            </button>
            <div className="bg-[#F5F6F8] flex flex-1 items-center justify-center w-full h-[51.56px]">
              {nights} nights
            </div>
            <button
              className="w-10 h-[51.56px] bg-green text-white text-center flex items-center justify-center"
              onClick={increaseNights}
            >
              +
            </button>
          </div>

          {/* Date Selection */}
          <div className="py-6">
            <h4>Pick a Date</h4>
            <div className="bg-[#F5F6F8] flex h-[52px] items-center">
              <div className="bg-primary w-[45px] h-[51.56px] flex items-center justify-center">
                <img src="/images/ic_calendar.svg" alt="calendar" />
              </div>
              <div className="flex flex-1 items-center justify-center w-full">
                20 Jan - 22 Jan
              </div>
            </div>
            <p className="text-lg leading-[30.6px] text-secondary">
              You will pay <strong className="text-black">${totalPrice} USD</strong> for{" "}
              <strong className="text-black">{nights} nights</strong>
            </p>
          </div>

          {/* Booking Button */}
          <button className="btn !rounded-none w-full"  onClick={() => navigate("/booking", { state: { nights } })}>
            Continue Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHotel;
