import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler() {
    setUserFavourites((prevFavourites) => {
      return prevFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavouriteHandler() {}
  function itemIsFavouriteHandler() {}

  const Context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
  };

  return (
    <FavouritesContext.Provider value={Context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
