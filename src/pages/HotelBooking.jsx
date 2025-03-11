import React from "react";
import { useLocation } from "react-router";



const HotelBookingPage = () => {
  const location = useLocation();
  const nightsSelected = location.state?.nights || 1;
  const pricePerNight = 240;
  const totalPrice = nightsSelected * pricePerNight;

  return (
    <>
      <section className="wrapper p-6">
        <div className="flex items-center justify-center">
          {/* Step Indicator */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center bg-gray-300">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold">
                1
              </div>
            </div>
          </div>
          <div className="w-16 h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-400 font-bold">
              2
            </div>
          </div>
          <div className="w-16 h-1 bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-400 font-bold">
              3
            </div>
          </div>
        </div>

        <div className="text-center py-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary">
            Booking Information
          </h1>
          <p className="text-base md:text-lg font-light text-secondary">
            Please fill up the blanks field below
          </p>
        </div>
      </section>

      <section className="wrapper py-4 px-4 md:px-8">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-32">
          {/* Hotel Details */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/images/Cashville-Image.svg"
              alt="Cashville-Image"
              className="w-full md:w-[420px] h-auto object-cover"
            />
            <div className="flex justify-between items-center w-full mt-2">
              <div>
                <h2 className="text-lg md:text-xl font-medium">Cashville</h2>
                <p className="text-sm md:text-base text-secondary">
                  Kemang, Indonesia
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base text-secondary">
                  <strong className="text-black">${totalPrice} USD</strong> for
                  <strong className="text-black"> {nightsSelected} nights</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-auto w-px bg-secondary"></div>

          {/* Booking Form */}
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-base md:text-lg">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ihsan"
                className="w-full md:w-[320px] bg-secondary-300 p-4 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-base md:text-lg">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Please type here ..."
                className="w-full md:w-[320px] bg-secondary-300 p-4 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base md:text-lg">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please type here ..."
                className="w-full md:w-[320px] bg-secondary-300 p-4 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-base md:text-lg">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Please type here ..."
                className="w-full md:w-[320px] bg-secondary-300 p-4 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 mt-8">
          <button className="bg-primary-100 w-full md:w-[300px] h-[50px] text-white rounded shadow text-lg">
            Continue to Book
          </button>
          <button className="bg-secondary w-full md:w-[300px] h-[50px] text-gray-500 rounded shadow text-lg">
            Cancel
          </button>
        </div>
      </section>
    </>
  );
};

export default HotelBookingPage;
