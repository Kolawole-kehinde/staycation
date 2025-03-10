import React from 'react'
import { useParams } from 'react-router';
import { data } from '../../constant/data';
import ListItems from '../../Components/ListItems';
import AboutHotel from '../../Components/About';

const HotelDetailPage = () => {
    const { id } = useParams();
  const hotel = data.find((hotel) => hotel.id === id); 

  const thingToDo = data.slice(12, 16);
  return (
   <section>
       <section className="wrapper py-5 px-4 md:px-0">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p className="text-lg leading-[28px] font-light text-secondary">
        Home / <span className="text-primary">House Details</span>
      </p>
    </div>
    <div>
      <h1 className="text-[28px] md:text-[42px] leading-[42px] md:leading-[63px] font-semibold text-primary">
        {hotel.name}
      </h1>
      <p className="text-lg leading-[28px] font-light text-secondary">
       {hotel.location}
      </p>
    </div>
  </div>
</section>


<section className="wrapper pt-10 px-4 md:px-0">
  <div className="flex flex-col lg:flex-row gap-4">
    <div className="w-full max-w-full lg:max-w-[658px]">
      {/* Main Image */}
      <img src={hotel.images[0]} alt={hotel.name} className="w-full h-[500px] rounded-2xl object-cover" />
    </div>
    <div className="flex flex-col space-y-4">
      {/* Map through the images  */}
      {hotel.images.slice(1, 3).map((img, index) => (
        <div key={index}>
          <img src={img} alt={`${hotel.name} ${index + 1}`} className="w-full h-[245px] object-cover" />
        </div>
      ))}
    </div>
  </div>
</section>



  {/* Abou the hotel section */}
{/* <section className="wrapper px-4 md:px-0">
  <h4 className="text-lg md:text-2xl font-medium text-primary">Decsription</h4>
  <div className="flex flex-col lg:flex-row gap-4 pt-4">
    <div className="w-full max-w-full lg:max-w-[658px] pr-0 lg:pr-8">
      <p className="text-base leading-[27.2px] font-light text-secondary max-w-full lg:max-w-[600px]">
       {hotel.description}
      </p>
      <div className="py-6 w-full max-w-full lg:max-w-[658px] flex flex-col gap-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <img src="/images/ic_bedroom.svg" alt="ic_bedroom" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">3 </strong>bedrooms</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/livingroom.svg" alt="livingroom" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">1 </strong>living room</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/bathroom.svg" alt="bathroom" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">3 </strong>bathroom</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/dining-room.svg" alt="dining-room" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">1 </strong>dining room</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <img src="/images/wifi.svg" alt="wifi" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">10 </strong>mbp/s</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/ac.svg" alt="ac" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">2 </strong> units ready</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/refrigerators.svg" alt="refrigerators" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">2 </strong>refrigerators</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/television.svg" alt="television" className="size-38 object-cover" />
            <p className="text-lg leading-[30.6px] text-secondary"><strong className="text-black">4 </strong>television</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex-1 border p-4 lg:p-8">
      <h4 className="text-lg md:text-2xl leading-[36px] font-medium text-primary py-6">Start Booking</h4>
      <p className="text-xl md:text-[36px] leading-[30px] md:leading-[54px] font-medium">
        <span className="text-green">$280 </span>per night
      </p>
      <p className="text-lg leading-[30px] pt-6">How long you will stay?</p>
      <div className="flex items-center gap-2">
        <div className="text-white text-center w-10 h-[51.56px] bg-[#E74C3C] flex items-center justify-center">-</div>
        <div className="bg-[#F5F6F8] flex flex-1 items-center justify-center w-full h-[51.56px]">2 nights</div>
        <div className="w-10 h-[51.56px] bg-green text-white text-center flex items-center justify-center">+</div>
      </div>
      <div className="py-6">
        <h4>Pick a Date</h4>
        <div className="bg-[#F5F6F8] flex h-[52px] items-center">
          <div className="bg-primary w-[45px] h-[51.56px] flex items-center justify-center">
            <img src="./public/asset/ic_calendar.svg" alt="" />
          </div>
          <div className="flex flex-1 items-center justify-center w-full">20 Jan - 22 Jan</div>
        </div>
        <p className="text-lg leading-[30.6px] text-secondary">
          You will pay <strong className="text-black">$480 USD</strong> for <strong className="text-black">2 nights</strong>
        </p>
      </div>
      <div>
        <a href="./booking.html">
          <button className="btn !rounded-none w-full">Continue Booking</button>
        </a>
      </div>
    </div>
  </div>
</section> */}
<AboutHotel hotel={hotel}/>



 {/* Things To Do Section */}
 <section className="wrapper py-10 px-4 md:px-0">
 <h1 className="text-lg md:text-2xl font-medium text-primary mb-6">Things to do</h1>
 <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                          {thingToDo.map((data) => (
                              <ListItems key={data.id} {...data} />
                          ))}
                      </div>
 </section>
                      
   </section>
  )
}

export default HotelDetailPage
