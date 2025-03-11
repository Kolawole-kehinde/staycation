import { Link } from "react-router";

export const ListItems = ({ id, mainImage, name, location, offer }) => {
  return (
    <div key={id} className="relative">
      {offer && (
        <div className="absolute top-0 right-0 w-[180px] h-[40px] flex items-center justify-center bg-secondary-200 rounded-tr-2xl rounded-bl-2xl">
          <p className="text-lg font-bold text-white leading-[30.6px]">
            Popular <span className="font-light">Choice</span>
          </p>
        </div>
      )}

      <Link to={`/hotel/${id}`}>
        <img src={mainImage} alt={name} className="rounded-2xl w-full h-auto object-cover" />
      </Link>

      <h2 className="font-medium text-[1.25rem] leading-[30px] text-primary">{name}</h2>
      <p className="font-light text-[0.939rem] leading-[22.5px] text-secondary">{location}</p>
    </div>
  );
};

export default ListItems;
