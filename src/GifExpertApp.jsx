import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch"
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // const valorant = 'Valorant';
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />
      <ol>
        {categories.map((category) => (
            <GifGrid 
            key={category}
            category={category}

            />
        ))}
          
      </ol>
    </>
  );
};
