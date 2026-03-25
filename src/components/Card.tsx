import type { Cardtypes } from "../types";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, title, url }: Cardtypes) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <Link to={url} >{title}</Link>
    </div>
  );
};

export default Card;
