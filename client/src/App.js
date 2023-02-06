import Home from "./pages/home/Home";
import TopBar from "./components/topbar/topBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

 

function App() {
  const user =true;
  return (
  
      <Router>
        <TopBar/>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/register' element={user ? <Home/> :<Register/>} />
        <Route  path='/login' element={user ? <Home/> : <Login/>} />
        <Route exact path='/write' element={user ? <Write/> : <Register/>} />
        <Route exact path='/settings' element={user ? <Settings/> : <Register/>} />
        <Route  path='/post/:postId' element={<Single/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
