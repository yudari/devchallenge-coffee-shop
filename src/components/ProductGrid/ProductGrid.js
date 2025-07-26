import { jsx as _jsx } from "react/jsx-runtime";
import ProductCard from '../ProductCard/ProductCard';
const ProductGrid = ({ products = [], onAddToCart }) => {
    console.log("product grid: ", products);
    return (_jsx("div", { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto', children: products.map((value) => (_jsx(ProductCard, { product: value, onAddToCart: onAddToCart }, value.id))) }));
};
export default ProductGrid;
