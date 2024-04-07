import Link from "next/link";
import { Product } from "@/types";
import AddWishlist from "./AddWhistlist";

interface ProductsCardProps {
  products: Product[];
}

export default function CardProducts({ products }: ProductsCardProps) {
  return (
    <>
      {products.map((product, index) => (
        <div className="card  mr-4 mb-2">
          <Link href={`/products/${product.slug}`}>
            <figure className="pt-10 ">
              <img
                src={product.thumbnail} alt={product.name}
                className=" w-full border border-gray-200  transition-transform transform hover:scale-110"
              />
            </figure>
          </Link>
          <div className="card-body items-center text-center  rounded-xl">
            <p className=" text-black text-md">
              {product.name}
            </p>
            <p className="text-lg text-orange-600 ">£{product.price}</p>
          <AddWishlist productId={product?._id}/>
          </div>
        </div>
      ))}
    </>
  )
}