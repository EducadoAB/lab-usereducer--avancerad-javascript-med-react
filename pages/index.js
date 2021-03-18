import { useState, useEffect } from "react";
import ProductCardGrid from "../components/ProductCardGrid/ProductCardGrid";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await fetch("/api/products");
    const products = await response.json();
    setProducts(products);
  }, []);

  return (
    <div>
      <ProductCardGrid products={products} />
    </div>
  )
}