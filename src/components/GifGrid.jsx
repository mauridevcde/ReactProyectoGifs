import { useState,useEffect } from "react";
import { getGifs } from "../helpers/api_getGifs";

export const GifGrid = ({ category }) => {
  
   const [images, setImages] = useState([]) 

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

     // el use efect se ejecuta cuando el componente es renderizado por primera vez, haciendo que no se vuelva a ejecutar esa porcion de codigo en proximos renderizados.
    // si se le pasa un arreglo vacio como segundo parametro, se ejecutara solo una vez, cuando el componente es renderizado por primera vez
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h3>{category}</h3>

        <ol>
            {
                images.map( ({id, title}) => (
                    <li key = {id}>
                        {title}
                    </li>
                ))
            }
        </ol>
    </div>
  );
};
