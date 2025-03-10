import React from 'react'
import ListItems from './ListItems';
import { data } from '../constant/data';

const HouseWithBackyard = () => {
    const HouseWithBackyardItems = data.slice(0, 4);
  return (
    <div className="wrapper pt-6 px-4 lg:px-0">
    <h2 className="font-medium text-[1.5rem] leading-[36px] text-primary pb-4">
    House With Backyard
    </h2>
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {HouseWithBackyardItems.map((data) => (
            <ListItems key={data.id} {...data} />
        ))}
    </div>
</div>
  )
}

export default HouseWithBackyard



