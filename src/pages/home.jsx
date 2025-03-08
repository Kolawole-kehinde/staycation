import React from 'react'
import ShowCase from '../Components/ShowCase'
import MostPicked from '../Components/MostPicked'
import HouseWithBackyard from '../Components/HouseWithBackyard'
import HotelWithLivingRoom from '../Components/HotelWithLivingRoom'
import ApartmentWithKitchen from '../Components/ApartmentWithKitchen'
import HappyFamily from '../Components/HappyFamily'

const HomePage = () => {
  return (
    <div>
       <ShowCase/>
       <MostPicked/>
       <HouseWithBackyard/>
       <HotelWithLivingRoom/>
       <ApartmentWithKitchen/>
       <HappyFamily/>
    </div>
  )
}

export default HomePage
