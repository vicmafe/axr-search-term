import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import RegisterTerm from './pages/Register';
import RegisteredTerm from './pages/Registered';
import Home from './pages/Home'
import AppProvider from '../src/context/AppProvider';


function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterTerm} />
          <Route exact path="/:id" component={RegisteredTerm} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
