import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
import React from "react";

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-11ca9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup</h1>
      <MeetupList meetups={loadedMeetups} />
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
    </section>
  );
}

export default AllMeetupPage;
