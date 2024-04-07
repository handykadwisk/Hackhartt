'use-client'
import React from "react";
import { Product } from "@/types";
import RemoveWishlist from "./RemoveWishlist";

const CardWishlist = ({ product, _id }: {product: Product, _id: string, onRemove: (id: string) => void}) => {
  return (
    <>
    {/*  */}
    <div className="card  mr-4 mb-2">
            <figure className="pt-10 ">
              <img
                src={product.thumbnail} alt={product.name}
                className=" w-full border border-gray-200  transition-transform transform hover:scale-110"
              />
            </figure>
         
          <div className="card-body items-center text-center  rounded-xl">
            <p className=" text-black text-md">
              {product.name}
            </p>
            <p className="text-lg text-orange-600 ">£{product.price}</p>
            <RemoveWishlist wishlistId={_id}  />

          </div>
        </div>
    </>
  );
};

export default CardWishlist
