import { formatPrice } from "@/utils/utils";
import React from "react";
import styles from "./productDetails.module.css";

const ProductDetails = ({
  brand,
  image,
  price,
  stock,
  description,
  origin,
  sizes,
  handleSku,
  selectedSku,
}) => {
  // Extract the three sizes from the sizes array
  const sizeArray = sizes.slice(0, 3);

  return (
    <div className={styles.container}>
      <div className={styles.align}>
        <img src={image} className={styles.image} />
      </div>

      <div className={styles.productNameAndPrice}>
        <h1 className={styles.productName}>{brand}</h1>
        <h1 className={styles.productPrice}>$ {formatPrice(price)}</h1>
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
          {sizeArray.map((size, index) => (
            <button
              key={index}
              onClick={() => handleSku(size.code)}
              style={{
                borderColor: size.code === selectedSku ? "#FF9F24" : "#969696",
              }}
              className={styles.sizeButtons}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
