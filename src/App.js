import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  return (
   <h1>
    Helloworld
    <button onClick={loginWithRedirect}>Login</button>
   </h1>
  );
}

export default App;
