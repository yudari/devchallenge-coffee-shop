import { Product } from "@/types/product.types";

export const getProduct = async (): Promise<Product[]> => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        const products: Product[] = data.map((value: any) => {
            console.log("data dari API: ", value);
            return {
                id: value.id,
                name: value.name,
                image: value.image,
                price: value.price,
                rating: value.rating,
                votes: value.votes,
                popular: value.popular,
                isSoldOut: value.soldOut ?? false,
                isAvailable: value.available ?? false
            }
        });
        return products;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
};
