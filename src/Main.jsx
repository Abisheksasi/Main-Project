import Navigation from "./HomePage/Navigation";
import Referral from "./Component/Referral";
import HomePage from "./Component/HomePage";
import Accommodation from "./Component/Accommodation"
import Trustpilot from "./Component/Trustpilot";
import Easy from "./Component/EasySteps";
import House from "./Component/House";
import Help from "./Component/Help";

function Main() {
    return (
        <div>
           <Navigation/>
           <HomePage/>
           <Referral/>
           <Accommodation/>
           <Trustpilot/>
           <Easy/>
           <House/>
           <Help/>
        </div>
    )
}
export default Main;