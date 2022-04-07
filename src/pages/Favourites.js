import React from "react";
import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouritesCTX = useContext(FavouritesContext);

  let content;

  if (favouritesCTX.totalFavourites === 0) {
    content = <p>You got no favourites. Add some!</p>;
  } else {
    content = <MeetupList meetup={favouritesCTX.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
