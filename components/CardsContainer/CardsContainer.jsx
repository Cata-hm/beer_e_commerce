import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./cards.module.css";
import Card from "../Card/Card";
import { getListProducts } from "@/services/product.services";

const CardsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { success, data } = await getListProducts();
    if (success) {
      setProducts(data);
    } else {
      alert("Error getting data");
    }
  };

  const onAddToCart = () => {
    alert("Added to cart");
  };
  return (
    <div className={styles.cardsContainer}>
      {products.map((product, index) => (
        <Card
          key={product.id}
          index={index}
          id={product.id}
          brand={product.brand}
          name={product.brand}
          image={product.image}
          price={product.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
