import './Text.css'

type Props = { 
  desc: string;  
  font?: string; 
  color: string; 
  size?: string; 
};

const Text = ({ desc, font, color, size }: Props) => {
  return (
    <div className="text">
      <p style={{ 
        fontFamily: font || 'inherit', 
        color: color, 
        fontSize: size || '1.5rem' 
      }}>
        {desc}
      </p>
    </div>
  );
}

export default Text;
