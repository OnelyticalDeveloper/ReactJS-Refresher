import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetup/MeetUpList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites. Start Adding Some !</p>;
  } else {
    content = <MeetUpList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites!</h1>
      {content}
    </section>
  );
}

export default Favorites;
