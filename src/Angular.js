import  logo  from "./angular.svg";
import withLogo from "./withLogo";

function Angular() {
   return <img src={logo} className="App-logo" alt="logo"/>;
}
export default withLogo(Angular);
