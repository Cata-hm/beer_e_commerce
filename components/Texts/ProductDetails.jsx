import React from "react";
import styles from "./text.module.css";

const ProductDetails = ({
  brand,
  image,
  price,
  stock,
  description,
  origin,
  sizes,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.align}>
        <img src={image} className={styles.image} />
      </div>

      <div className={styles.productNameAndPrice}>
        <h1 className={styles.productName}>{brand}</h1>
        <h1 className={styles.productPrice}>{price}</h1>
      </div>

      <div className={styles.originAndStock}>
        <h4>
          Origin: {origin} | Stock: {stock}{" "}
        </h4>
      </div>

      <div>
        <h3 className={styles.description}>Description</h3>
        <p className={styles.paragraph}>{description}</p>
      </div>

      <div>
        <h3 className={styles.size}>Size</h3>

        <div className={styles.align2}>

          <div>
            <button className={styles.sizeButtons}>Oz {sizes}</button>
          </div>
          <div>
            <button className={styles.sizeButtons}>Oz {sizes}</button>
          </div>
          <div>
            <button className={styles.sizeButtons}>Oz {sizes}</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
