import { getProduct } from "@/data/product";
import { useEffect, useMemo, useState } from "react";
export const useProducts = () => {
    const [filter, setFilter] = useState("all");
    const [listProduct, setListProduct] = useState([]);
    const filterProducts = useMemo(() => {
        switch (filter) {
            case "available":
                return listProduct.filter((product) => product.isAvailable === true);
            case "all":
            default:
                return listProduct;
        }
    }, [filter, listProduct]);
    useEffect(() => {
        (async () => {
            try {
                const products = await getProduct();
                console.log(products);
                setListProduct(products);
            }
            catch (error) {
                console.error(error);
            }
        })();
    }, []);
    const handleAddToCart = (product) => {
        console.log("test add cart", product);
    };
    return {
        products: filterProducts,
        filter,
        setFilter,
        handleAddToCart,
    };
};
