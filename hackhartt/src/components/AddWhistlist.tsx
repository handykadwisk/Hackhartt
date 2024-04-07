'use client'
import { useRouter } from 'next/router';
import React from 'react';
import Swal from 'sweetalert2'

interface AddWishlistlistProps {
  productId: Object;
}

const AddWishlist: React.FC<AddWishlistlistProps> = ({ productId }) => {

  const handleAddToWishlist = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item to wishlist');
      }

      const result = await response.json();
      Swal.fire({
        icon: "success",
        text: `${result.message}`
      }); 
      // router.push('/wishlist')
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot add the same food twice"
      });
    }
  };

  return (
    <button onClick={handleAddToWishlist} className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
      Add To Wishlist
    </button>
  );
};

export default AddWishlist;