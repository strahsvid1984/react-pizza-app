import React, { useState } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [selectedCat, setSelectedCat] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((c, index) => (
          <li
            key={c}
            className={index === selectedCat ? "active" : null}
            onClick={() => setSelectedCat(index)}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
