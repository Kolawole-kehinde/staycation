import React from 'react'

const HappyFamily = () => {
  return (
    <section className="w-full max-w-[1076px] py-10 mx-auto px-4 lg:px-0">
    <div className="flex flex-col md:flex-row space-y-6  md:space-x-10">
      <div className="w-full">
        <img
          src="/images/Happy-Famiy.svg"
          alt="Happy-Famiy"
          className="w-[405px] h-[541px] object-cover"
        />
      </div>

      <div
        className="w-full max-w-[615px] flex flex-col items-start justify-center space-y-8 md:space-y-6"
      >
        <h4 className="text-2xl leading-[36px] font-medium text-primary">
          Happy Famiy
        </h4>
        <img
          src="/images/review.svg"
          alt="review"
          className="w-[108] h-[34px] object-cover"
        />
        <h1 className=" text-2xl lg:text-[2rem] md: leading-[30px] md:leading-[48px] text-primary">
          What a great trip with my family and I should try again next time
          soon ...
        </h1>
        <p className="text-lg leading-[27px] text-primary">
          Adi, UI/UX Designer
        </p>
        <button
          className="bg-primary-100 py-2 px-4 text-white cursor-pointer outline-none border-none rounded-md shadow-2xl"
        >
          Read our stories
        </button>
      </div>
    </div>
  </section>
  )
}

export default HappyFamily
