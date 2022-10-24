import  logo  from "./vue.jpg";
import withLogo from "./withLogo";

function Vue() {
    return <img src={logo} className="App-logo" alt="logo"/>;
}
export default withLogo(Vue);
