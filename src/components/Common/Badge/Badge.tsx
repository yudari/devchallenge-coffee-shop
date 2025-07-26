import React from 'react'
import { BadgeProps } from '@/types/common.types'

const Badge: React.FC<BadgeProps> = ({ children, variant = 'popular', className = '' }) => {
    const baseClasses = 'absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded';


    const variantClasses = {
        popular: 'bg-yellow-400 text-yellow-800 rounded-md',
        'sold-out': 'bg-red-500 text-white rounded-md',
    }

    return (
        <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </span>
    );
};
export default Badge;
