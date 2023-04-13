import React, { useState } from "react";
import axios from "axios";
import styles from "./card.module.css";
import { useRouter } from 'next/router'


const Card = ({ id, brand, name, image, price, onAddToCart,index }) => {
  const router = useRouter()
 
  const handleCardClick = async () => {
    try {
      router.push(`/${id}-${brand}`);
    } catch (error) {
      console.error("Failed to fetch product stock and price information", error);
    }
  };

const isOdd = (index % 2) === 1

  const formatPrice = (value)=>{
    const myPrice =  value.toString()
    const decimals = myPrice.slice(-2);//take the last two numbers
    const whole = myPrice.slice(0,-2)
    return `${whole},${decimals}`
  }


  return (
    <div className={isOdd ? styles.productCardLeft  : styles.productCardRight } onClick={handleCardClick}>
       <h3 className={styles.productName}>{name}</h3>
      <img className={styles.productImage} src={image} alt={name} />
      <div className={styles.productInfo}>
        <p className={styles.productPrice}>Price: ${formatPrice(price)}</p>
        <button className={styles.addToCartButton} onClick={onAddToCart}>
        +
      </button>
      </div>
    
    </div>
  );
};

export default Card;
