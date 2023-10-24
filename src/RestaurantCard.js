import { IMG_CDN_URL } from './constant';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RestaurantCard = ({
    name,avgRating,cuisines,
    areaName,cloudinaryImageId,
    locality,
}) => {
return (
        <div className="card w-[235px] h-[330px] bg-amber-100 rounded-lg  m-3 shadow-lg">
        < img src={IMG_CDN_URL + cloudinaryImageId} className='w-full h-[180px] rounded-t-xl' />
           <div className="card-content">
            <h2 className="RestaurantName">{name}</h2>
            <div className="sub-content">
            <p>{locality } </p>
            <p className="cuisines">{cuisines.slice(0, 4).join(", ")}</p>
            {/* <p>{areaName}</p> */}
            <h4> <i className="fa-solid fa-star"></i>
           {avgRating}</h4>
         </div>
     </div>
</div>


);

}

 export default RestaurantCard;