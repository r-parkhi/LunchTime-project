import { useQuery } from "@apollo/client";
import { food } from "../../lib/mappings"
import { GET_PRODUCT } from "../../lib/queries";
import "./LargeEntree.css"
import { NavLink } from "react-router";

export default function LargeEntree({ id }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const imageSrc = new URL(food[id], import.meta.url);
  const product = data.product;

  return (
    <NavLink to={`info/${product.id}`} className="specialEntree">
      <img className="productImage" src={imageSrc}></img>
      <div className="productInfo">
        <div className="productText">
          <span className="productName">{product.name}</span>
          <span className="productRating">{product.rating_average}</span>
        </div>
      </div>
    </NavLink>
  )
}