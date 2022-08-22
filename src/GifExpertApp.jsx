import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = () => {

        setCategories(['One Punch2', ...categories]);

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/*importamos un componente*/}
            <AddCategory setCategories = {setCategories}/>

            <br />

            <button onClick={onAddCategory}> Agregar</button>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    }
                    )
                }
            </ol>

        </>
    )
}