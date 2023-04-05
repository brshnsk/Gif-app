import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "One piece",
    "Dragonb ball",
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
          <div key={category}>
            <h3>{category}</h3>
            <li>{category}</li>
          </div>
        ))}
      </ol>
    </>
  );
};
