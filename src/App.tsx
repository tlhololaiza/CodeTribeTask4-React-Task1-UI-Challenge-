
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Text from './components/Text/Text'
import Category from './components/Category/Category'
import picture_5 from './assets/images/Custom Cake.jpeg';
import picture_6 from '/src/assets/images/Macaron.jpeg';
import picture_7 from '/src/assets/images/Cupcake Collection.jpeg';
import picture_8 from '/src/assets/images/Holiday.jpeg';
import picture_9 from '/src/assets/images/No title_no desc.jpeg';
import picture_10 from '/src/assets/images/Holiday Collection.jpeg';


function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <Text desc = "Delight in every Bite!" font="'Dancing Script', cursive" color="black" size="3rem" />

      <div className='categories'>
        <Category title="Custom Cakes" image={picture_5} desc="Handmade and delicious cakes for any occasion." />
        <Category title="Macarons" image={picture_6} desc="Colorful, delicate, and sweet macarons you'll love." />
        <Category title="Cupcakes" image={picture_7} desc="Perfect cupcakes topped with creamy frosting." />
        
      </div>
      
      <Text desc = "~Cupcake Collection!~" font="'Dancing Script', cursive" color="gold" size="3rem" />

      <div className='categories'>
        <Category title="-20% OFF" image={picture_8} desc="" />
        <Category title="" image={picture_9} desc="" />
        <Category title="Holiday Collection" image={picture_10} desc="Cakes for the holiday" />
        
      </div>
      
      <Footer/>
    </>
  )
}

export default App
