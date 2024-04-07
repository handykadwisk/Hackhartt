"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";


interface RemoveProps {
  wishlistId: string;
}

const RemoveWishlist: React.FC<RemoveProps> = ({ wishlistId }) => {
  const router = useRouter();

  const remove = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: wishlistId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove item from wishlist");
      }
      const result = await response.json();

      Swal.fire({
        icon: "success",
        text: `${result.message}`

      }); 
      router.push("/products");
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <button
      onClick={remove}
      className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <h1 className="">Remove from Wishlist</h1>
    </button>
  );
};

export default RemoveWishlist;
