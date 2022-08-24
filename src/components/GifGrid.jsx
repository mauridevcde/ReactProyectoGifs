import { useEffect } from "react";
import { getGifs } from "../helpers/api_getGifs";

export const GifGrid = ({ category }) => {
  
    useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      <p>Probando</p>
    </div>
  );
};
