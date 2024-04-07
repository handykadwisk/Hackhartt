import Wishlist from "@/db/models/wishlist";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const userId = request.headers.get('x-user-id');
        // console.log(userId);
        if (!userId) {
            return NextResponse.json({
                message: 'User Not Found'
            }, {
                status : 404
            })
        }
    
        const body = await request.json();
        const { productId } = body; 
        const wishlistItem = await Wishlist.createWishlist(userId, productId);
        // console.log(wishlistItem, "<><><><><><><><>");
        
        return NextResponse.json({
            message: "Wishlist item added"
        }, {
            status: 201
        })    
    } catch (error) {
        // console.log(error, "ERORRR <><><><><><><><>");
        return NextResponse.json({
            message: "Internal server error"
        },{
            status: 500
        })
    }
}

export const GET = async (request: Request): Promise<Response | NextResponse> => {
    try {
        const userId = request.headers.get('x-user-id');
        // console.log(userId, "<><><><><><><><>");
        if (!userId) {
            return NextResponse.json({
                message: 'User Not Found'
            }, {
                status : 404
            })
        }
        // const body = await request.json();
        // const { productId } = body; 

        const getWishlist = await Wishlist.showWishlist(userId);
        // console.log(getWishlist,'<><<<<<<<');
        
        return new Response(JSON.stringify(getWishlist), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log(error, "ERORR <><><><><><><><>");
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
    }

export const DELETE = async (request: Request) => {
    try {
        const userId = request.headers.get('x-user-id')
        if (!userId) {
            return NextResponse.json({
                message: 'User Not Found'
            }, {
                status : 404
            })
        }

        const body = await request.json();
        const {_id } = body
        const deleteWishlist = await Wishlist.deleteWishlist(_id)

        return NextResponse.json({
            message: "Wishlist has been Deleted"
        }, {
            status: 200
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500
        })
    }
}