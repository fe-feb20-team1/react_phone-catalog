import React from 'react';
import Category from './Category';
import { categories } from './helpers';

import './Categories.scss';

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <h1>Shop by category</h1>
      <div className="categories__wrapper">
        {categories.map(category => (
          <Category {...category} key={category.title} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
