"use client"
import CardProducts from "@/components/CardProducts";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Products() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchData = async () => {
        setLoading(true);
        try {
            
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
                cache: "no-store",
            });

            if (!response.ok) throw new Error();

            const responseJson = await response.json();
            setProducts(responseJson.data);
        } catch (error) {
            console.log(error, "<< ERR DI PRODUCTS");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts: Product[] = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <>
            <div className="flex items-center justify-center mb-10 ml-10">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <FaSearch className="ml-4 text-gray-500 cursor-pointer" />
            </div>
            <div className="grid justify-center grid-cols-3 mx-40">
                <CardProducts products={filteredProducts} />
            </div>
        </>
    );
}