import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductCardGrid.module.css";

const ProductCardGrid = ({products}) => (
    <div className={styles.productCardGrid}>
        {products.map(product => (
            <ProductCard key={product.id} product={product} /> 
        ))}
    </div>
);

export default ProductCardGrid;