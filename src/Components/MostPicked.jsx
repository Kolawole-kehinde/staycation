import React from 'react'

const MostPicked = () => {
  return (
    <section className="wrapper py-8 px-4 lg:px-0">
        <h1 className="text-[1.5rem] leading-[36px] font-medium text-primary mb-6">
          Most Picked
        </h1>
      
      
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
     
          <div className="relative w-full lg:max-w-[360px]">
            <img
              src="/images/finns.svg"
              alt="Finns Beach Club"
              className="rounded-lg w-full h-auto object-cover"
            />
            <div
              className="absolute top-0 right-0 bg-secondary-200 rounded-tr-2xl rounded-bl-2xl w-[160px] h-[40px] flex items-center justify-center"
            >
              <p className="text-lg font-bold text-white">
                $50 <span className="font-light">per night</span>
              </p>
            </div>
            <div className="absolute bottom-4 left-4">
              <h4 className="text-xl font-medium text-primary">Finns Beach Club</h4>
              <p className="text-sm font-light text-primary">Denpasar, Bali</p>
            </div>
          </div>
      
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        
            <div className="relative">
              <img
                src="/images/Montigo.svg"
                alt="Montigo Resort"
                className="rounded-2xl w-full h-[200px] sm:h-[215px] object-cover"
              />
              <div
                className="absolute top-0 right-0 bg-secondary-200 rounded-tr-2xl rounded-bl-2xl w-[160px] h-[40px] flex items-center justify-center"
              >
                <p className="text-lg font-bold text-white">$50 <span className="font-light">per night</span></p>
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-medium text-primary">Montigo Resort</h4>
                <p className="text-sm font-light text-primary">Rio de Janeiro, Brazil</p>
              </div>
            </div>
      
       
            <div className="relative">
              <img
                src="/images/Montana.svg"
                alt="Montana Bay"
                className="rounded-2xl w-full h-[200px] sm:h-[215px] object-cover"
              />
              <div
                className="absolute top-0 right-0 bg-secondary-200 rounded-tr-2xl rounded-bl-2xl w-[160px] h-[40px] flex items-center justify-center"
              >
                <p className="text-lg font-bold text-white">$22 <span className="font-light">per night</span></p>
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-medium text-primary">Montana Bay</h4>
                <p className="text-sm font-light text-primary">Berlin, Germany</p>
              </div>
            </div>
      
           
            <div className="relative">
              <img
                src="/images/Kalpa-tree.svg"
                alt="Kalpa Tree"
                className="rounded-2xl w-full h-[200px] sm:h-[215px] object-cover"
              />
              <div
                className="absolute top-0 right-0 bg-secondary-200 rounded-tr-2xl rounded-bl-2xl w-[160px] h-[40px] flex items-center justify-center"
              >
                <p className="text-lg font-bold text-white">$858 <span className="font-light">per night</span></p>
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-medium text-primary">Kalpa Tree</h4>
                <p className="text-sm font-light text-primary">Ternate, Nusa Tenggara Barat</p>
              </div>
            </div>
      
          
            <div className="relative">
              <img
                src="/images/Caesar.svg"
                alt="Caesar Palace"
                className="rounded-2xl w-full h-[200px] sm:h-[215px] object-cover"
              />
              <div
                className="absolute top-0 right-0 bg-secondary-200 rounded-tr-2xl rounded-bl-2xl w-[160px] h-[40px] flex items-center justify-center"
              >
                <p className="text-lg font-bold text-white">$72 <span className="font-light">per night</span></p>
              </div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-lg font-medium text-primary">Caesar Palace</h4>
                <p className="text-sm font-light text-primary">Las Vegas, America</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MostPicked
