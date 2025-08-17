import React from 'react';
import Category from '../Category/Category';

interface CategoriesProps {
  children?: React.ReactNode;
  categories?: Array<{
    title: string;
    image: string;
    desc: string;
  }>;
}

const Categories: React.FC<CategoriesProps> = ({ children, categories }) => {
  return (
    <div className='categories'>
      {children || (
        categories?.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            image={category.image}
            desc={category.desc}
          />
        ))
      )}
    </div>
  );
};

export default Categories;