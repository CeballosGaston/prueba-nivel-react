import type { Cardtypes } from "../types";
import { Link } from "react-router-dom";
import "./card.css"

const Card = ({ imageUrl, title, url, price }: Cardtypes) => {
  return (
    <div className="card">
      <Link to={url}>
        {title} <img src={imageUrl} alt="" />
      </Link>

      <p>{price} €</p>
    </div>
  );
};

export default Card;
