import './App.css';
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import MyPosts from './pages/MyPosts';


function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/my_posts" component={MyPosts} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
