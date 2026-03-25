import { albums } from "../../data/albums";

import Card from "../../components/Card";
import "./products.css";

const Products = () => {
  return (
    <div>
      <h2>Jazz Albums</h2>
      <ul className="ul">
        {albums.map((a) => (
          <li key={a.id}>
            <Card
              imageUrl={a.image}
              title={a.album}
              price={a.price}
              url={`/products/${a.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
