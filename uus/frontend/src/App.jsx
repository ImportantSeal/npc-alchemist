import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "./shared/components/Navbar/Navbar";
import Items from "./items/components/Items";
import AddItem from "./items/pages/AddItem";
import EditItem from "./items/pages/EditItem";
import Signup from "./users/pages/Signup";
import Login from "./users/pages/Login";
import Profile from "./users/pages/Profile";
import Users from "./users/pages/Users";

import { AuthContextProvider } from "./shared/components/context/AuthContextProvider";
import { useAuthContext } from "./shared/components/context/auth-context";

import "./App.css";

const queryClient = new QueryClient();

function AppContent() {
  const { isLoggedIn } = useAuthContext();

  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Switch>
          <Route path="/" exact component={Items} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route
            path="/items/new"
            exact
            render={() => (isLoggedIn ? <AddItem /> : <Redirect to="/login" />)}
          />
          <Route
            path="/items/:id/edit"
            exact
            render={() => (isLoggedIn ? <EditItem /> : <Redirect to="/login" />)}
          />
          <Route
            path="/profile"
            exact
            render={() => (isLoggedIn ? <Profile /> : <Redirect to="/login" />)}
          />
          <Route
            path="/users"
            exact
            render={() => (isLoggedIn ? <Users /> : <Redirect to="/login" />)}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
