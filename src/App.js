import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import RegisterTerm from './pages/Register';
import RegisteredTerm from './pages/Registered';


function App() {
  return (
    <GlobalStyle>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RegisterTerm} />
          <Route exact path="/:id" component={RegisteredTerm} />
        </Switch>
      </BrowserRouter>
    </GlobalStyle>
  );
}

export default App;
