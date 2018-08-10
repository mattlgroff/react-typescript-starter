import * as React from "react";
import { Link, Route } from "react-router-dom";
import Name from "./components/Name";

const Home = () => (
  <div>
    <h2> Home </h2>
    React TS Starter for <Name firstName="Matt" lastName="Groff" />
  </div>
);

const Airport = () => (
  <div>
    <ul>
      <li>George Bush International</li>
      <li>Boston Logan</li>
      <li>Lindbergh Field</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>Houston</li>
      <li>Boston</li>
      <li>San Diego</li>
    </ul>
  </div>
);

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
          <li>
            <Link to="/name">Cities</Link>
          </li>
        </ul>
        <Route path="/" component={Home} />
        <Route path="/airports" component={Airport} />
        <Route path="/cities" component={City} />
      </div>
    );
  }
}

export default App;
