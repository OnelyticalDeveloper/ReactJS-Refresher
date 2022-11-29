import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetUpForm from "../components/meetup/NewMeetUpForm";

function NewMeetUp() {
  const navigate = useNavigate();
  function addMeetup(meetupData) {
    fetch(process.env.URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((val) => navigate("/", { replace: true }))
      .catch((err) => console.log(err));
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetup} />
    </section>
  );
}

export default NewMeetUp;
