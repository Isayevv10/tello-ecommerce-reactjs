import React, { useEffect, useState } from "react";
import { commerce } from "../commerce";
import CategoriesItem from "./CategoriesItem";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await commerce.categories.retrieve("cat_yA6nld2v3oEWbz", {
      depth: 30,
    });
    setCategories(res.children);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div className='category-container'>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <div>
                <CategoriesItem category={category} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
