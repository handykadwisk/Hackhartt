import { MongoClient, ServerApiVersion} from 'mongodb';
const uri = "mongodb+srv://handykadwisk:<password>@gc1-dyka.ctrvyla.mongodb.net/?retryWrites=true&w=majority&appName=GC1-Dyka";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
