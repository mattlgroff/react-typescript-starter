import * as React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';

const Home = () => (
  <div>
    <Header status="Upload and Convert Files" progress={1} />
  </div>
);

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route path="/" component={Home} />
      </div>
    );
  }
}

export default App;
