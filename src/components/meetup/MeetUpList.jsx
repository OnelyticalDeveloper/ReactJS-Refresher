import React from "react";
import MeetUpItem from "./MeetUpItem";
import styles from "./MeetUpList.module.css";
function MeetUpList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((data) => (
        <React.Fragment key={data.id}>
          <MeetUpItem
            id={data.id}
            image={data.image}
            title={data.title}
            address={data.address}
            description={data.description}
          />
        </React.Fragment>
      ))}
    </ul>
  );
}

export default MeetUpList;
