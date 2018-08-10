import * as React from "react";
import { Link, Route } from "react-router-dom";
import Name from "./components/Name";

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

const NameRoute = () => {
  return <Name firstName="Matt" lastName="Groff" />;
};

class App extends React.Component {
  public render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/airports">Airports</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>
        <Route path="/" component={Home} />
        <Route path="/airports" component={Airport} />
        <Route path="/cities" component={City} />
        <Route path="/name" render={NameRoute} />
      </div>
    );
  }
}

export default App;
