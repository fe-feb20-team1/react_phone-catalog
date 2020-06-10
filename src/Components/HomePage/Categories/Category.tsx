import React from 'react';
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
  return (
    <div className="category__block">
      <div className="category__img-background" style={{ backgroundColor }}>
        <img src={src} alt={title} />
      </div>
      <div className="category__description">
        <h2>{title}</h2>
        <p>{`${modelsCount} models`}</p>
      </div>
    </div>
  );
};

export default Category;
