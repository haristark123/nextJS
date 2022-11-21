import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// const DUMMY_MEETUPS = [
//   {
//     id:1,
//     title:'A First Meetup',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/220px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
//     address:'Nehru street Allagadda',
//     description:'A First Meetup'
//   },
//   {
//     id:2,
//     title:'A Second Meetup',
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/220px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
//     address:'Nehru street Allagadda',
//     description:'A Second Meetup'
//   },
// ]

export default function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(){
  //Fetch Data from an Api we can use fetch /api/route 
  const client = await MongoClient.connect(
    "mongodb+srv://haari:bv630BYA5nVtcbDG@cluster0.sn5ju.mongodb.net/nextDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const data = await meetupsCollection.find().toArray()
  console.log(data);

  return {
    props:{
        meetups:data.map(item=>({
          title:item.title,
          image:item.image,
          address:item.address,
          description:item.description,
          id:item._id.toString()
        }))
    },
    revalidate:1
  }
}



// export async function getServerSideProps(context){
//   const req= context.req
//   const response = context.res // response wont work here 
//   return{
//     props:{
//       meetups:DUMMY_MEETUPS
//     }
//   }
// }