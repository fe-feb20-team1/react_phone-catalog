import React from 'react';
import Category from './Category';
import { categories } from './helpers';

import './Categories.scss';

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">
        Shop by category
      </h2>
      <div className="categories__wrapper">
        {categories.map(category => (
          <Category {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
