import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGO_URI as string

const client = new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
export const db = client.db('gc2-dyka')
