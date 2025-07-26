import './App.css'
import { useProducts } from './hooks/useProducts'
import Header from './components/Header/Header'
import ProductGrid from './components/ProductGrid/ProductGrid'
import bgCafe from '@/assets/bg-cafe-lg.jpg';
function App() {
  const { products,
    filter,
    setFilter,
    handleAddToCart } = useProducts();
  return (
    <div className='min-h-screen w-screen relative'>
      {/* ini untuk background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 w-full"
        style={{
          backgroundImage: `url(${bgCafe})`,
          backgroundColor: '#121315',
          height: 'clamp(250px, 60vw, 500px)',
        }}
      ></div>
      {/* Ini untuk konten */}
      <div className='top-32  mx-auto w-10/12 relative z-10 px-4 py-12 rounded-md mb-20' style={{ backgroundColor: '#1C1D1F' }}>
        <Header currentFilter={filter} onFilterChange={setFilter} />
        <ProductGrid products={products} onAddToCart={handleAddToCart} />
      </div>

      <footer className="top-20 relative text-center z-100 text-white pb-6">
        © 2025 Yudha Coffee Shop. All rights reserved.
      </footer>
    </div>
  )
}

export default App
