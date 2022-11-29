import React, { useState, useEffect } from "react";
import MeetUpList from "../components/meetup/MeetUpList";

function AllMeetUps() {
  const [loding, setLoding] = useState(true);
  const [meetupsArray, setMeetupsArray] = useState([]);
  useEffect(() => {
    setLoding(true);
    fetch(process.env.REACT_APP_URL)
      .then((res) => res.json())
      .then((data) => {
        const meetUpsData = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetUpsData.push(meetup);
        }
        setLoding(false);
        setMeetupsArray(meetUpsData);
      });
  }, []);
  if (loding) {
    return (
      <section>
        <p>Loding...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={meetupsArray} />
    </section>
  );
}

export default AllMeetUps;
