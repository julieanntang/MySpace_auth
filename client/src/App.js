import './App.css';
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
