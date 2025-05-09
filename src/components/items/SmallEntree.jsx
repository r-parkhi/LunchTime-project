import './SmallEntree.css'
import { NavLink } from "react-router"
import { food } from "../../lib/mappings";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../lib/queries";

function SmallEntree({ id }) {
 
    const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
  
    const imageSrc = new URL(food[id], import.meta.url);
    const product = data.product;
  
  
  return (
    <NavLink to={`/info/${product.id}`} className='dailyFoodBox'>
      <h3>{product.name}</h3>
      <img className="dailyImg" src={imageSrc}></img>
    </NavLink>
  );
}
export default SmallEntree