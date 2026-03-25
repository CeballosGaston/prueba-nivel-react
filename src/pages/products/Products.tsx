import { albums } from "../../data/albums";
import { Link } from "react-router-dom";



const Products = () => {

return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {albums.map((a) => (
          <li key={a.id}>
            <Link to={`/albums/${a.id}`}>{a.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );}


export default Products;









