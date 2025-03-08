import React from 'react'
import ListItems from './ListItems';
import { data } from '../constant/data';

const HouseWithBackyard = () => {
    const HouseWithBackyardItems = data.slice(0, 4);
  return (
    <div className="wrapper pt-6">
    <h2 className="font-medium text-[1.5rem] leading-[36px] text-primary pb-4">
    HouseWithBackyard
    </h2>
    <div className="gap-5 grid md:grid-cols-4 grid-cols-2">
        {HouseWithBackyardItems.map((data) => (
            <ListItems key={data.id} {...data} />
        ))}
    </div>
</div>
  )
}

export default HouseWithBackyard



