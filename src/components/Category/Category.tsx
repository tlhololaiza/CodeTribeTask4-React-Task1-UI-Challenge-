import './Category.css';

type Props = { 
  title?: string; 
  image: string; 
  desc?: string;
  buttonText?: string;
  isPromo?: boolean;
  hideButton?: boolean;
};

const Category = ({ title, image, desc, buttonText = 'ORDER TODAY', isPromo = false, hideButton = false }: Props) => (
  <div className={`category-card ${isPromo ? 'promo-card' : ''}`}>
    <img src={image} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
      {!hideButton && <button>{buttonText}</button>}
    </div>
  </div>
);

export default Category;
