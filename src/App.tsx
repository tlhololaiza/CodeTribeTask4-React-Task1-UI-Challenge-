import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Text from './components/Text/Text'
import Category from './components/Category/Category'
import Categories from './components/Categories/Categories'
import pic_5 from './assets/images/Custom Cake.jpeg';
import pic_6 from '/src/assets/images/Macaron.jpeg';
import pic_7 from '/src/assets/images/Cupcake Collection.jpeg';
import pic_8 from '/src/assets/images/Holiday.jpeg';
import pic_9 from '/src/assets/images/No title_no desc.jpeg';
import pic_10 from '/src/assets/images/No title_no desc.jpeg';

function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <Text desc = "Delight in every Bite!" font="'Dancing Script', cursive" color="#2c1810" size="3rem" />

      <Categories>
        <Category title="Custom Cakes" image={pic_5} desc="Exquisite handcrafted sweets to make moments memorable." buttonText="VIEW CATALOG" />
        <Category title="Macarons" image={pic_6} desc="Delicate shells, rich fillings — a Parisian classic." buttonText="VIEW CATALOG" />
        <Category title="Cupcake Collections" image={pic_7} desc="Playful flavors topped with our signature swirls." buttonText="ORDER TODAY" />
      </Categories>
      
      <Text desc = "~ Culinary Collection ~" font="'Dancing Script', cursive" color="#c9a961" size="2.4rem" />

      <Categories>
        <Category title="Holiday" image={pic_8} desc="- 20% OFF" buttonText="ORDER TODAY" isPromo />
        <Category title="Cupcakes" image={pic_9} desc="Seasonal delights" buttonText="ORDER TODAY" />
        <Category title="Holiday Collection" image={pic_10} desc="A sparkle for every table" buttonText="ORDER NOW" isPromo />
      </Categories>
      
      <Footer/>
    </>
  )
}

export default App