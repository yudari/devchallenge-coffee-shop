import React from 'react'
import { ProductCardProps } from '@/types/product.types';
import { Star } from 'lucide-react';
import Badge from '../Common/Badge/Badge';


const ProductCard: React.FC<ProductCardProps> = ({ product = { id: '', name: '', image: '', price: '', rating: 0, votes: 0, popular: false, isSoldOut: false, hasNoRating: false, isAvailable: false }, }) => {
    return (
        <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200'>
            <div className='relative h-40 overflow-hidden'>
                <img src={product.image} alt={product.name} className='w-full h-full object-cover hover:scale-100 transition-transform duration-200' />
                {product.popular && <Badge variant='popular'>Popular</Badge>}

                {product.isSoldOut && <Badge variant='sold-out'>Sold Out</Badge>}
            </div>
            <div className='p-4'>
                <div className='flex justify-between items-start mb-2'>
                    <h4 className='text-lg font-semibold text-gray-500'>{product.name}</h4>
                    <span className='text-green-600 font-bold bg-green-100 px-2 py-1 rounded text-sm'>
                        {product.price}
                    </span>
                </div>

                <div className='flex items-center space-x-1'>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {product.hasNoRating ? (
                        <span className='text-gray-400'>No rating</span>

                    ) : (
                        <>
                            <span className='text-gray-700 font-medium'>
                                {product.rating}
                            </span>
                            <span className='text-gray-500 text-sm'>
                                ({product.votes}) votes
                            </span>
                        </>

                    )}

                </div>
            </div>
        </div>
    );
};
export default ProductCard;
