import React from 'react'
import { Product } from '@/types/product.types';
import ProductCard from '../ProductCard/ProductCard';


interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void
}
const ProductGrid: React.FC<ProductGridProps> = ({ products = [], onAddToCart }) => {

    console.log("product grid: ", products);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {products.map((value: Product) => (
                <ProductCard key={value.id} product={value} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};
export default ProductGrid;
