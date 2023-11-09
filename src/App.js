import NavBar from "./component/NavBar";
import Home from "./component/Home";
import SocialLinks from "./component/SocialLinks";
import About from "./component/About";
// import Workfolio from "./component/Workfolio";
import Experience from "./component/Experience";
import Contacts from "./component/Contacts";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>  
    <SocialLinks/>
    <About/>
    {/* <Workfolio/> */}
    <Experience/>
    <Contacts/>
    </div>
  );
}

export default App;
