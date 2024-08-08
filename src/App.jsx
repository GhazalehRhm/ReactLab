import ProductCard from "./components/productCard/index.jsx";
import "./App.css";

function App() {
  return (
    <>
      <section className="row">
        <ProductCard
          title="گوشی موبایل آنر دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت "
          image="./images/cardImage1.webp"
          rate={4.7}
          price={17999000}
          isFreeShipping = {true}
          count = {false}
          countData = "20"
          off={false}
          offNum={20}
         
        />
        <ProductCard
          title="گوشی موبایل شیائومی دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت"
          image="./images/cardImage2.webp"
          rate={4.3}
          price={15999000}
          isFreeShipping = {false}
          count = {true}
          isSpecialSale = {true}
          countData = "3"
          off={true}
          offNum={13}
        />
        <ProductCard
          title="گوشی موبایل داریا دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت"
          image="./images/cardImage3.webp"
          rate={4.4}
          price={9200000}
          isFreeShipping = {false}
          count = {false}
          isSpecialSale = {false}
          countData = "1"
          off={true}
          offNum={15}
         
        />
        <ProductCard
          title="گوشی موبایل اپل دو سیم کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو"
          image="./images/cardImage4.webp"
          rate={4.7}
          price={64575000}
          isFreeShipping = {true}
          count = {true}
          isSpecialSale = {true}
          countData = "15"
          off={true}
          offNum={10}
         
        />
        <ProductCard
          title="گوشی موبایل سامسونگ دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام"
          image="./images/cardImage5.webp"
          rate={4.2}
          price={19300000}
          isFreeShipping = {false}
          count = {true}
          isSpecialSale = {false}
          countData = "8"
          off={false}
          offNum={7}

        />
        <ProductCard
          title="گوشی موبایل شیائومی دو سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت"
          image="./images/cardImage6.webp"
          rate={4.1}
          price={30299000}
          isFreeShipping = {true}
          count = {true}
          isSpecialSale = {true}
          countData = "6"
          off={true}
          offNum={9}
        />
      </section>
    </>
  );
}

export default App;
