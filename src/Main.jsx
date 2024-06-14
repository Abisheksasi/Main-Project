import Navigation from "./HomePage/Navigation";
import HomePage from "./Component/HomePage";
import Accommodation from "./Component/Accommodation"
import Easy from "./Component/EasySteps";
import House from "./Component/House";
import Help from "./Component/Help";
import Footer from "./Component/Footer";

function Main() {
    return (
        <div>
           <Navigation/>
           <HomePage/>
           <Accommodation/>
           <Easy/>
           <House/>
           <Help/>
           <Footer/>
        </div>
    )
}
export default Main;