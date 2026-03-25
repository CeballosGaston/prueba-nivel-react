import { albums } from "../../data/albums";

import Card from "../../components/Card";

const Products = () => {
  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {albums.map((a) => (
          <li key={a.id}>
            <Card
              imageUrl={a.image}
              title={a.album}
              url={`/products/${a.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
