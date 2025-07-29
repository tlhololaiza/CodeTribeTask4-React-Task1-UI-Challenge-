import './Category.css';

type Props = { 
  title?: string; 
  image: string; 
  desc?: string; 
};

const Category = ({ title, image, desc }: Props) => (
  <div className="category-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{desc}</p>
    <button>Order Today</button>
  </div>
);

export default Category;
