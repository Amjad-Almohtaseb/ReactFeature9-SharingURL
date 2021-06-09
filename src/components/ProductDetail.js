// Components
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find((p) => p.slug === productSlug);

  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
