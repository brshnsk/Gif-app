import { useState } from "react";
import { AddCategory, GifGrid} from "./components/";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([

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
