import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body
    // console.log(data.title);
    const client = await MongoClient.connect(
      "mongodb+srv://haari:bv630BYA5nVtcbDG@cluster0.sn5ju.mongodb.net/nextDB?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Data Inserted" });
  }
}
