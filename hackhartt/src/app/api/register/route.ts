import UserModel from "@/db/models/User";
import { NextResponse } from "next/server";
import { ZodError } from "zod"; 

export const POST = async (request: Request) => {
    try {
        const body = await request.json()
        const data = await UserModel.create(body)

        return Response.json({
            message: "Register Success"
        }, {
            status: 201
        })
    } catch (error) {
        if (error instanceof ZodError) {
            const errorPath = error.issues[0].path[0]
            const { message } = error.issues[0]

            return NextResponse.json(
                {
                    message: `${errorPath} ${message}`
                }, {
                    status: 400
                }
            )
        }

        if (error instanceof Error) {
            if (error.message === "Email/Username Already Registered"){
                return NextResponse.json(
                    {
                        message: error.message
                    },
                    {status: 400}
                )
            }
        }

        return NextResponse.json(
            {
                message: "Internal Server Error"
            },
            { status : 500}
        )
    }
}