import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function index(props) {
  return <MeetupDetail {...props.meetup} />;
}

export default index;

export async function getStaticPaths() {
  return {
    fallback: false, // if it is false , it means it has all paths support for . 
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetup: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/220px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg",
        title: "A First MeetUp",
        address: "Nehru Street Allagadda",
        desc: "The Meetup Description",
      },
    },
  };
}
