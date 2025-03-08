import React from 'react'

const ShowCase = () => {
  return (
    <section className="wrapper pt-4 md:pt-10 px-4 lg:px-0">
    <div className="flex flex-col-reverse lg:flex-row items-start gap-6 md:gap-8">
     
      <div className="w-full md:max-w-[514px]">
        <h1
          className="text-3xl md:text-[2.625rem] leading-[42px] md:leading-[63px] font-bold text-primary-200"
        >
          Forget Your Main Work, Start Holiday Now!
        </h1>
        <p
          className="text-base md:text-[1.125rem] leading-[24px] md:leading-[30px] font-light text-secondary py-6 md:py-10"
        >
          We provide you what you need to enjoy your holiday with family.
          Time to make another memorable moments.
        </p>
  
        <button
          className="btn bg-primary-100 text-white py-2 px-6 rounded-md hover:bg-primary-200 transition duration-300"
        >
          Show me now
        </button>
  
      
        <div className="pt-10 flex space-x-2  md:space-x-6">
          <div className="">
            <div>
            <img
              src="/images/ic_traveler.svg"
              alt="traveler"
              className="w-8 h-8 mx-auto md:mx-0"
            />
          </div>
            <div>
            <p className="text-sm md:text-[1.125rem] leading-[30.6px] font-medium text-primary">
              80,409
              <span className="font-light text-secondary">
                travelers
              </span>
            </p>
          </div>
          </div>
          <div className="text-center">
            <img
              src="/images/ic_cities.svg"
              alt="cities"
              className="w-8 h-8"
            />
            <p className="text-sm md:text-[1.125rem] leading-[30.6px] font-medium text-primary">
              1,492 
              <span className="font-light text-secondary">
                cities
              </span>
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/treasure.svg"
              alt="treasure"
              className="w-8 h-8"
            />
            <p className="text-[1.125rem] leading-[30.6px] font-medium text-primary">
              862
               <span className="font-light text-secondary">
                treasures
              </span>
            </p>
          </div>
        </div>
      </div>
  
      <div className="w-full">
        <img
          src="/images/Hero-img.svg"
          alt="Hero-img"
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
  )
}

export default ShowCase
