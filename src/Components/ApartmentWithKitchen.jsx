import { data } from "../constant/data";
import ListItems from "./ListItems";



const ApartmentWithKitchen = () => {
const ApartmentWithKitchenItems = data.slice(8, 12);
  return (
    <div className="wrapper pt-6 px-4 lg:px-0">
                <h2 className="font-medium text-[1.5rem] leading-[36px] text-primary pb-4">
                    Apartment With Kitchen
                </h2>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    {ApartmentWithKitchenItems.map((data) => (
                        <ListItems key={data.id} {...data} />
                    ))}
                </div>
            </div>
  )
}

export default ApartmentWithKitchen