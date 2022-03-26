import "./App.css";
import { MainContainer } from "./App.Styles";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Screens/Login/Login";
import HomePage from "./Screens/HomeScreen/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.email);

  return (
    <MainContainer>
      <NavBar />
      <Switch>
        <Route path={"/"} exact={true} component={Login} />
        <Route path={"/homepage"} exact={true} component={HomePage}>
          {!user ? <Redirect to="/" /> : <HomePage />}
        </Route>
      </Switch>
    </MainContainer>
  );
}

export default App;
