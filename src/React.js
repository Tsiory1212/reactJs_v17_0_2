import  logo  from "./logo.svg";
import withLogo from "./withLogo";

function React() {
    return <img src={logo} className="App-logo" alt="logo"/>;
}
export default withLogo(React);
