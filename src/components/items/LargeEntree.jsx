import { useQuery } from "@apollo/client";
import { food } from "../../lib/mappings"
import { GET_PRODUCT } from "../../lib/queries";
import "./LargeEntree.css"

export default function LargeEntree({ id }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const imageSrc = food[id];
  const product = data.product

  return (
    <div className="specialEntree">
      <img className="productImage" src={imageSrc}></img>
      <div className="productInfo">
        <div className="productText">
          <span className="productName">{product.name}</span>
          <span className="productRating">{product.rating_average}</span>
        </div>
      </div>
    </div>
  )
}