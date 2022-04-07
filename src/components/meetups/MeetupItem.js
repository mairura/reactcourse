import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import React from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesCTX = useContext(FavouritesContext);

  const itemsIsFavourite = favouritesCTX.itemIsFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemsIsFavourite) {
      favouritesCTX.removeFavourite(props.id);
    } else {
      favouritesCTX.addFavourites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemsIsFavourite ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
