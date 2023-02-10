import "./style/categories.scss";
import React, { useState } from "react";
import { Link, useNavigate, createSearchParams } from "react-router-dom";

function CategoriesItem({ category }) {
  const [isShown, setIsShown] = useState(false);
  const [subCategory, setSubCategory] = useState([]);
  const navigate = useNavigate();

  const showSubCategory = (cat) => {
    setIsShown(true);
    setSubCategory(cat);
  };

  const showSubCategory2 = () => {
    setIsShown(false);
  };

  const goSite = (name) => {
    if (name === "Bütün Brendlər") {
      name = "BUTUN-BRENDLER";
    }

    let str2 = "";
    str2 = name.replace(/\s/g, "-");
    navigate({
      pathname: "/products",
      search: createSearchParams({
        brand: str2,
      }).toString(),
    });
  };

  return (
    <div>
      <div
        className='name-category'
        onMouseEnter={() => showSubCategory(category.children)}
        onMouseLeave={showSubCategory2}
      >
        <div className='main-category' onClick={() => goSite(category.name)}>
          {category.name}
        </div>

        <div className='sub-category'>
          {isShown && (
            <div className='category_item'>
              {subCategory?.map((subcat) => {
                return (
                  <div key={subcat.id}>
                    <div
                      className='sub-category-main'
                      onClick={() => goSite(subcat.name)}
                    >
                      <Link to='products' className='sub-category-main-link'>
                        {subcat.name}
                      </Link>
                    </div>
                    <div className='sub-category-child'>
                      {subcat.children.map((item) => {
                        return (
                          <div key={item.id} onClick={() => goSite(item.name)}>
                            <Link to='products'>{item.name}</Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoriesItem;
