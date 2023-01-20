import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  const imageUrl =
    "https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg";
  //const imageUrl="https://img.freepik.com/free-vector/worldwide-buying-online-symbols-flat-icons-collection-with-e-shop-basket-filling-paying-home-delivery_1284-33082.jpg?w=2000&t=st=1674175808~exp=1674176408~hmac=a775913080628231e5b3d253e4d8d5086549a4655aad1b1810c012c41ea877c4"
  return (
    <div className="home">
      <div className="home__container">
        <img src={imageUrl} alt="eCommerceHomePage" className="home__image" />

        <div className="home__row">
          <Product
            id="1234561"
            title="            
            Samsunit Bag for laptop; Water Repellent fabric for men & women (Blue)"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="1234562"
            title="            
            Samsunit Bag for laptop; Water Repellent fabric for men & women (Blue)"
            price={11.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234563"
            title="            
            Samsunit Bag for laptop; Water Repellent fabric for men & women (Blue)"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="1234564"
            title="            
            Samsunit Bag for laptop; Water Repellent fabric for men & women (green)"
            price={11.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="1234565"
            title="            
            Samsunit Bag for laptop; Water Repellent fabric for men & women (Yellow)"
            price={11.96}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234566"
            title="            
            Samsunit Bag for laptop; Water Repellent fabric for men & women (Blue)"
            price={20.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
