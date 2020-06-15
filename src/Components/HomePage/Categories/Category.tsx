import React from 'react';
import { NavLink } from 'react-router-dom';

import './Category.scss';

type Props = {
  title: string;
  backgroundColor: string;
  src: string;
  modelsCount: number;
};

const Category: React.FC<Props> = ({
  title, backgroundColor, src, modelsCount,
}) => {
  const imgClass = `category__img-background--${src}`;

  return (
    <div className="category__block">
      <NavLink to={src}>
        <div
          className={imgClass}
          style={{ backgroundColor }}
        />
      </NavLink>
      <div className="category__description">
        <NavLink to={src}>
          <h2>{title}</h2>
        </NavLink>
        <p>{`${modelsCount} models`}</p>
      </div>
    </div>
  );
};

export default Category;
