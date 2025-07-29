
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Text from './components/Text/Text'
import Category from './components/Category/Category'

function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <Text desc = "Delight in every Bite!" font="'Dancing Script', cursive" color="black" size="3rem" />

      <div className='categories'>
        <Category title="Custom Cakes" image="/src/assets/images/Custom Cake.jpeg" desc="Handmade and delicious cakes for any occasion." />
        <Category title="Macarons" image="/src/assets/images/Macaron.jpeg" desc="Colorful, delicate, and sweet macarons you'll love." />
        <Category title="Cupcakes" image="/src/assets/images/Cupcake Collection.jpeg" desc="Perfect cupcakes topped with creamy frosting." />
        
      </div>
      
      <Text desc = "~Cupcake Collection!~" font="'Dancing Script', cursive" color="gold" size="3rem" />

      <div className='categories'>
        <Category title="-20% OFF" image="/src/assets/images/Holiday.jpeg" desc="" />
        <Category title="" image="/src/assets/images/No title_no desc.jpeg" desc="" />
        <Category title="Holiday Collection" image="/src/assets/images/Holiday Collection.jpeg" desc="Cakes for the holiday" />
        
      </div>
      
      <Footer/>
    </>
  )
}

export default App
