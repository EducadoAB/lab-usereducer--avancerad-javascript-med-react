import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <div className={styles.attributes}>
        <span className={styles.name}>
            {product.name}
        </span>
        <span className={styles.price}>
            {product.price} SEK
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
