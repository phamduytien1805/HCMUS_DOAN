import { Switch, Redirect, Route } from "react-router-dom";

import { Chat } from "./views/Chat";

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Chat />} />
      <Redirect to="/" />
    </Switch>
  );
};
