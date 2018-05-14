import React from 'react';
import '../../App.css';
import Category from './Category';
import Banner from '../Banner';

function Categories(props) {

  const categories = props.categories.map(category => {
    return (
      <Category
        key={category.id}
        category={category.category}
        image={category.img_url}
      />
    )
  });

  return (
    // each category image will be mapped through to create a individual flex items that link to all products
    // for that specific category

        <div className="flex-container">
          <Banner
            image="https://images.unsplash.com/photo-1485745352553-859d7a306fbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d57b648befb46f55dfd0fb04ae51d4e3&auto=format&fit=crop&w=1050&q=80"
            text="Andes Mountains"
          />
          {categories}
        <div className="footer">
        <ul>
        <li>About Nature'd</li>
        <li>Meet our Team</li>
        <li>Blog</li>
        <li>FAQ</li>
        </ul>
        </div>
      </div>
  );
}

export default Categories;
