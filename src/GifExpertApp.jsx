import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (newCategory.trim().includes(categories)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/*importamos un componente*/}
      <AddCategory onNewCategory={onAddCategory} />

      <br />

      {categories.map((category) => (
        <GifGrid 
            key={category}
            category={category} />
      ))
      }
    </>
  );
};
