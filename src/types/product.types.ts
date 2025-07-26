export interface Product {
    id: string,
    name: string,
    image: string,
    price: string,
    rating: number,
    votes: number,
    popular: boolean,
    isSoldOut: boolean,
    hasNoRating: boolean,
    isAvailable: boolean
}

export interface ProductCardProps {
    product: Product,
    onAddToCart: (product: Product) => void;
}



