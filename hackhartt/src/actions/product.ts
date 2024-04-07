'use server'

import { revalidatePath } from "next/cache";


export async function deleteProduct(id: string | undefined){
    const res = await fetch("localhost:3000/product/" + id,{
        method: "DELETE"
    });
    const result = await res.json();
    revalidatePath("/products")
}

// export async function addWhistList(pro)
