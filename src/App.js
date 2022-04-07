import { Route } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetup";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
