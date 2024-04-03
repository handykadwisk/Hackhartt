import { MongoClient, ServerApiVersion } from "mongodb";
uri = 

const client = new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})