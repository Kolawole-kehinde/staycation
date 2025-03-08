export const ListItems = ({id, image, title, subTitle}) => {
    return (
        
          <div key={id}>
            <img src={image} alt={title} className="rounded-2xl w-full h-auto object-cover"/>
            
            <h2 className="font-medium text-[1.25rem] leading-[30px] text-primary">{title}</h2>
            <p className="font-light text-[0.939rem] leading-[22.5px] text-secondary">{subTitle}</p>
            
      
      
          </div>
        
      
    )
  }
  
  export default ListItems