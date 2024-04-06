import { ObjectId } from "mongodb";

export interface User {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string; 
}

export interface Product {
    _id: ObjectId;
    name: string; 
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Wishlist {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface Response<T> {
    error?: string;
    data?: T | null;
}
