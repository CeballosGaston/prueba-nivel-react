import { useParams } from "react-router-dom";
import { albums } from "../../data/albums";
import type { Albums } from "../../types";
import { useNavigate } from "react-router-dom";
import "./productsDetails.css"

const ProductsDetails = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const album: Albums | undefined = albums.find((a) => a.id === albumId);

  if (!album) return <div>Album Not Found</div>;

  return (
    <div>
      <div>
        <h1>Album: {album.album}</h1>
        <h2>Singer Name: {album.name}</h2>
        <h2>Song: {album.song}</h2>
        <h2>Year: {album.year}</h2>
        <h2>Description: {album.description}</h2>
        <h2>Price: {album.price} €</h2>
        <img src={album.image} alt="" />
      </div>
      <button onClick={() => navigate("/")}>Come back to Products</button>
    </div>
  );
};

export default ProductsDetails;
