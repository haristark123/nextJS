import React, { Fragment } from "react";
import classes from './MeetupDetail.module.css'
function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
      className={classes.detail}
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.desc}</p>
    </section>
  );
}

export default MeetupDetail;
