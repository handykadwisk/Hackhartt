import { Product } from '@/types'
import { db } from "../config/mongodb";
import { z } from "zod";

const ProductValidation = z.object({
  name: z.string({
    required_error: "Name cant be empty",
  }),
  slug: z.string({
    required_error: "Slug cant be empty",
  }),
});

export default class ProductModel {
  static productCollection() {
    return db.collection<Product>("Products");
  }

  static async getAllProducts() {
    const data = await this.productCollection().find().toArray();
    
    return data;
  }

  static async getFeaturedProducts() {
    const data = await this.getAllProducts();
    const featured = data.slice(0, 5);

    return featured;
  }

  static async getProductBySlug(slug: string) {
    const data = await this.productCollection().findOne({
      slug: slug
    });

    return data;
  }
  static async findAndSortAll(page: number) {
    const perPage = 8;

    if (page && (!Number.isInteger(page) || page < 0)) {
      throw new Error(
        "Invalid page number. Please provide a non-negative integer or null."
      );
    }

    if (page == 0) {
      page = 1;
    }

    /*
     Important to ensure it will not skip any data if the page value is not provided or at the first page which probably what you want in the initial render 
     */
    
    const skipValue = page == 1 ? 0 : (page - 1) * perPage;

    const result = await this.productCollection()
      .aggregate([{ $sort: { createdAt: -1 } }])
      .skip(skipValue)
      .limit(perPage)
      .toArray();

    if (result.length === 0) {
      return [];
    }

    return result;
  }
}
