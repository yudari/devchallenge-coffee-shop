import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { useProducts } from './hooks/useProducts';
import Header from './components/Header/Header';
import ProductGrid from './components/ProductGrid/ProductGrid';
import bgCafe from '@/assets/bg-cafe-lg.jpg';
function App() {
    const { products, filter, setFilter, handleAddToCart } = useProducts();
    return (_jsxs("div", { className: 'min-h-screen w-screen relative', children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 w-full", style: {
                    backgroundImage: `url(${bgCafe})`,
                    backgroundColor: '#121315',
                    height: 'clamp(250px, 60vw, 500px)',
                } }), _jsxs("div", { className: 'top-32  mx-auto w-10/12 relative z-10 px-4 py-12 rounded-md mb-20', style: { backgroundColor: '#1C1D1F' }, children: [_jsx(Header, { currentFilter: filter, onFilterChange: setFilter }), _jsx(ProductGrid, { products: products, onAddToCart: handleAddToCart })] }), _jsx("footer", { className: "top-20 relative text-center z-100 text-white pb-6", children: "\u00A9 2025 Yudha Coffee Shop. All rights reserved." })] }));
}
export default App;
