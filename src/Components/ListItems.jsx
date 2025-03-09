import { Link } from "react-router"

export const ListItems = ({id, mainImage, name, location}) => {
    return (
        
          <div key={id}>
            <Link to={`/hotel/${id}`}>
            <img src={mainImage} alt={name} className="rounded-2xl w-full h-auto object-cover"/>
            </Link>
            
            <h2 className="font-medium text-[1.25rem] leading-[30px] text-primary">{name}</h2>
            <p className="font-light text-[0.939rem] leading-[22.5px] text-secondary">{location}</p>
            
      
      
          </div>
        
      
    )
  }
  
  export default ListItems