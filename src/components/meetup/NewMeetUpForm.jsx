import React, { useRef } from "react";
import Card from "../ui/Card";
import styles from "./NewMeetUpForm.module.css";

function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const entredTitle = titleInputRef.current.value;
    const entredImage = imageInputRef.current.value;
    const entredAddress = addressInputRef.current.value;
    const entredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: entredTitle,
      image: entredImage,
      address: entredAddress,
      description: entredDescription,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">MeetUp Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image"> Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description"> Description</label>
          <textarea
            id="description"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
