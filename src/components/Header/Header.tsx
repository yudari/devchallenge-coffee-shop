import React from 'react'
import Button from '../Common/Button/Button';

interface HeaderProps {
    onFilterChange: (filter: string) => void;
    currentFilter: string;
}
const Header: React.FC<HeaderProps> = ({ onFilterChange, currentFilter }) => {
    return (
        <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-white mb-4'>Our Collection</h1>
            <p className='text-gray-400 max-w-2xl mx-auto mb-0 leading-relaxed'>introducing our Coffee Collection, a selection of unique coffee from different roast types and origins, expertly roasted in  small batches</p>

            <div className='flex justify-center space-x-4 mt-8'>
                <Button variant={currentFilter === 'all' ? 'primary' : 'secondary'} onClick={() => onFilterChange('all')}>All Products</Button>

                <Button variant={currentFilter === 'available' ? 'primary' : 'secondary'} onClick={() => onFilterChange('available')}>Available Now</Button>
            </div>
        </div>
    );
};
export default Header;
