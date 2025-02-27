const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://handykadwisk:hck68Dyka@gc1-dyka.ctrvyla.mongodb.net/?retryWrites=true&w=majority&appName=GC1-Dyka"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function main() {
  try {
    await client.connect();
    console.log("connected to MongoDB");

    const database = client.db("gc2-dyka");
    const collection = database.collection("Products");

    const docs = [
        {
          "name": "RELAXED FIT HEAVYWEIGHT SHORT-SLEEVE K87 POCKET T-SHIRT",
          "slug": "RELAXED-FIT-HEAVYWEIGHT-SHORT-SLEEVE-K87-POCKET-T-SHIRT",
          "description": "Our pocket t-shirt debuted in 1992, its rugged cotton design and clean looks made it a fast favorite among the hard-working folks who pulled it on.",
          "excerpt": "",
          "price": 20.99,
          "tags": ["T-Shirt", "Unisex"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105605_H84?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_105605_H84?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105605_H84?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "RELAXED FIT HEAVYWEIGHT LONG-SLEEVE LOGO GRAPHIC T-SHIRT",
          "slug": "RELAXED-FIT-HEAVYWEIGHT-LONG-SLEEVE-LOGO-GRAPHIC-T-SHIRT",
          "description": "Sightly loose for a comfortable fit, subtle shape for a range of motion",
          "excerpt": "",
          "price": 26.99,
          "tags": ["T-Shirt", "Black"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104107_BLK?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_104107_BLK?$pdp-primary-image-static-emea$",
                    "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104107_BLK?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "CARHARTT FORCE™ RELAXED FIT MIDWEIGHT SHORT-SLEEVE POCKET T-SHIRT",
          "slug": "CARHARTT FORCE™ RELAXED FIT MIDWEIGHT SHORT-SLEEVE POCKET T-SHIRT",
          "description": "An everyday tee with Carhartt pride, this mens short-sleeve t-shirt keeps you cool and comfortable on the job or off.",
          "excerpt": "",
          "price": 26.99,
          "tags": ["T-Shirt", "Basic"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104616_G73?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_104616_G73?$pdp-primary-image-static-emea$",
                    "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104616_G73?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "RELAXED FIT HEAVYWEIGHT LONG-SLEEVE LOGO SLEEVE GRAPHIC T-SHIRT",
          "slug": "RELAXED FIT HEAVYWEIGHT LONG-SLEEVE LOGO SLEEVE GRAPHIC T-SHIRT",
          "description": "Slightly loose for a comfortable fit, subtle shape for a range of motion. Slightly closer to the chest and closer fitted sleeves",
          "excerpt": "",
          "price":26.99,
          "tags": ["T-Shirt", "Oversize"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_EK231_BLK?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_EK231_BLK?$pdp-primary-image-static-emea$",
                    "https://imgcdn.carhartt.com/is/image/Carhartt/EU_EK231_BLK?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "LOOSE FIT MIDWEIGHT SWEATSHIRT",
          "slug": "LOOSE FIT MIDWEIGHT SWEATSHIRT",
          "description": "Slightly loose for a comfortable fit, subtle shape for a range of motion. Slightly closer to the chest and closer fitted sleeves.",
          "excerpt": "",
          "price": 62.99,
          "tags": ["T-Shirt", "Oversize"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_K121_BLK?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_K121_BLK?$pdp-primary-image-static-emea$",
                    "https://imgcdn.carhartt.com/is/image/Carhartt/EU_K121_BLK?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "KNIT INSULATED LOGO GRAPHIC CUFFED BEANIE",
          "slug": "KNIT INSULATED LOGO GRAPHIC CUFFED BEANIE",
          "description": "Whether youre in a cold warehouse or fishing on the ice, this mens hat is built with insulation to keep you nice and warm. Made of soft rib-knit that will not make you itch. The Carhartt name is proudly embroidered on the front",
          "excerpt": "",
          "price": 24.99,
          "tags": ["Hat", "BEANIE"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104068_001?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_104068_001?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104068_001?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "KNIT POM-POM CUFFED LOGO BEANIE",
          "slug": "0KNIT-POM-POM-CUFFED-LOGO-BEANIE",
          "description": "Something festive for those cold, grey days. This Carhartt beanie would make a perfect white elephant gift or stocking stuffer. The warm rib knit comes in holiday colors, but its versatile enough to wear past New Years",
          "excerpt": "",
          "price": 20.99,
          "tags": ["Hat", "BEANIE"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105168_G99?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_105168_G99?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105168_G99?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "KNIT CUFFED TWO-TONE BEANIE",
          "slug": "KNIT-CUFFED-TWO-TONE-BEANIE",
          "description": "Get ahead of the cool weather and stay protected from the elements in this beanie. The 100% acrylic construction and fold-up cuff adds easy warmth, while the two-toned relaxed fit offers effortless wearing. Perfect for construction sites, on a hike, at the football field, or in the garden.",
          "excerpt": "",
          "price": 20.99,
          "tags": ["Hat", "BEANIE"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_106065_B51?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_106065_B51?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_106065_B51?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "KNIT BEANIE",
          "slug": "KNIT-BEANIE",
          "description": "A go-to for the cooler months, this men′s hat can be worn comfortably under a hard hat, hoodie, or ear protection. The soft acrylic rib-knit has just the right amount of stretch and doesn′t make your forehead itchy.",
          "excerpt": "",
          "price": 14.99,
          "tags": ["Hat", "BEANIE"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_A205_G72?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_A205_G72?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_A205_G72?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "KNIT SHAMROCK PATCH BEANIE",
          "slug": "KNIT-SHAMROCK-PATCH-BEANIE",
          "description": "A go-to for the cooler months, this men′s hat can be worn comfortably under a hard hat, hoodie, or ear protection. The soft acrylic rib-knit has just the right amount of stretch and doesn′t make your forehead itchy.",
          "excerpt": "",
          "price": 20.99,
          "tags": ["Hat", "BEANIE"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105690_001?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_105690_001?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105690_001?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "LOOSE FIT MIDWEIGHT QUARTER ZIP MOCK NECK SWEATSHIRT",
          "slug": "LOOSE-FIT-MIDWEIGHT-QUARTER-ZIP-MOCK-NECK-SWEATSHIRT",
          "description": "From job site to backyard barbecue, you can cut the chill with this men′s sweatshirt. Carhartt durability and familiar sweatshirt comfort mean you can strap on a tool belt or relax with equal ease. A midweight cotton blend offers everyday versatility.",
          "excerpt": "",
          "price": 56.99,
          "tags": ["sweatshirt"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt//EU_105294_BLK?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt//EU_105294_BLK?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt//EU_105294_BLK?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "RAIN DEFENDER™ LOOSE FIT MIDWEIGHT 'C' GRAPHIC SWEATSHIRT",
          "slug": "RAIN-DEFENDER™-LOOSE-FIT-MIDWEIGHT-'C'-GRAPHIC-SWEATSHIRT",
          "description": "Workday or weekend work, this men′s Rain Defender™ heavyweight sweatshirt gives you the familiar comfort of a favorite sweatshirt with the added benefit of keeping you dry in light rain.",
          "excerpt": "",
          "price": 71.99,
          "tags": ["sweatshirt"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt//EU_105940_BRN?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt//EU_105940_BRN?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt//EU_105940_BRN?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "RAIN DEFENDER™ LOOSE FIT MIDWEIGHT LOGO GRAPHIC SWEATSHIRT",
          "slug": "RAIN-DEFENDER™-LOOSE-FIT-MIDWEIGHT-LOGO-GRAPHIC-SWEATSHIRT",
          "description": "Workday or weekend work, this men′s Rain Defender™ heavyweight sweatshirt gives you the familiar comfort of a favorite sweatshirt with the added benefit of keeping you dry in light rain.",
          "excerpt": "",
          "price": 71.99,
          "tags": ["sweatshirt"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105944_GD4?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_105944_GD4?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105944_GD4?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "LOOSE FIT MIDWEIGHT LOGO GRAPHIC SWEATSHIRT",
          "slug": "LOOSE-FIT-MIDWEIGHT-LOGO-GRAPHIC-SWEATSHIRT",
          "description": "Workday or weekend work, this men′s Rain Defender™ heavyweight sweatshirt gives you the familiar comfort of a favorite sweatshirt with the added benefit of keeping you dry in light rain.",
          "excerpt": "",
          "price": 62.99,
          "tags": ["sweatshirt"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_100074_001?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_100074_001?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_100074_001?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "RELAXED FIT FLEECE PULLOVER",
          "slug": "RELAXED-FI-FLEECE-PULLOVER",
          "description": "Workday or weekend work, this men′s Rain Defender™ heavyweight sweatshirt gives you the familiar comfort of a favorite sweatshirt with the added benefit of keeping you dry in light rain.",
          "excerpt": "",
          "price": 72.79 ,
          "tags": ["sweatshirt"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104991_A07?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_104991_A07?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104991_A07?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "CARHARTT LWD RELAXED FIT STRETCH INSULATED JACKET",
          "slug": "CARHARTT-LWD-RELAXED-FIT-STRETCH-INSULATED-JACKET",
          "description": "Unsettled weather? Step out of your truck ready for wind, light rain, and cool temperatures in this men′s insulated Carhartt jacket.",
          "excerpt": "",
          "price": 179.99 ,
          "tags": ["sweatshirt","jacket"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_106013_N04?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_106013_N04?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_106013_N04?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "LOOSE FIT WASHED DUCK INSULATED ACTIVE JAC",
          "slug": "LOOSE FIT WASHED DUCK INSULATED ACTIVE JAC",
          "description": "Unsettled weather? Step out of your truck ready for wind, light rain, and cool temperatures in this men′s insulated Carhartt jacket.",
          "excerpt": "",
          "price": 152.99 ,
          "tags": ["sweatshirt","jacket"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104050_BLK?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_104050_BLK?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_104050_BLK?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "LOOSE FIT FIRM DUCK BLANKET-LINED CHORE COAT",
          "slug": "LOOSE FIT FIRM DUCK BLANKET-LINED CHORE COAT",
          "description": "Unsettled weather? Step out of your truck ready for wind, light rain, and cool temperatures in this men′s insulated Carhartt jacket.",
          "excerpt": "",
          "price": 152.99 ,
          "tags": ["sweatshirt","jacket"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_103825_BRN?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_103825_BRN?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_103825_BRN?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "CARHARTT MONTANA LOOSE FIT INSULATED JACKET",
          "slug": "CARHARTT MONTANA LOOSE FIT INSULATED JACKET",
          "description": "Unsettled weather? Step out of your truck ready for wind, light rain, and cool temperatures in this men′s insulated Carhartt jacket.",
          "excerpt": "",
          "price": 161.99 ,
          "tags": ["sweatshirt","jacket"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105474_N04?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_105474_N04?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_105474_N04?$pdp-primary-image-static-emea$"]
        },
        {
          "name": "CARHARTT LWD RELAXED FIT STRETCH INSULATED JACKET",
          "slug": "CARHARTT LWD RELAXED FIT STRETCH INSULATED JACKET",
          "description": "Unsettled weather? Step out of your truck ready for wind, light rain, and cool temperatures in this men′s insulated Carhartt jacket.",
          "excerpt": "",
          "price": 179.99 ,
          "tags": ["sweatshirt","jacket"],
          "thumbnail": "https://imgcdn.carhartt.com/is/image/Carhartt/EU_106013_N04?$pdp-primary-image-static-emea$",
          "images": ["https://imgcdn.carhartt.com/is/image/Carhartt/EU_106013_N04?$pdp-primary-image-static-emea$",
                     "https://imgcdn.carhartt.com/is/image/Carhartt/EU_106013_N04?$pdp-primary-image-static-emea$"]
        }
    
    
    ]

    const result = await collection.insertMany(docs);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch {
    console.error("Failed connection to MongoDB")
  } finally {
    await client.close();
    console.log("connection closed from MongoDB");
  }
}
main()

// export const database = client.db('GC02')