import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList() {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          address={meetup.image}
          title={meetup.title}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
