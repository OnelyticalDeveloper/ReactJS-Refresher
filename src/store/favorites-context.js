import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorites(favoriteMeetUp) {
    setUserFavorites((prev) => {
      return prev.concat(favoriteMeetUp);
    });
  }
  function removeFavorites(meetUpId) {
    setUserFavorites((prev) => prev.filter((meetup) => meetup.id !== meetUpId));
  }
  function itemIsFavoritesHandler(meetUpId) {
    return userFavorites.some((meetup) => meetup.id === meetUpId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorites,
    removeFavorite: removeFavorites,
    itemIsFavorite: itemIsFavoritesHandler,
  };
  console.log(userFavorites.length);
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
