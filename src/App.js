import { BrowserRouter, Route } from 'react-router-dom';
import RegisterTerm from './pages/Register';
import RegisteredTerm from './pages/Registered';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ RegisterTerm } />
      <Route exact path="/registered" component={ RegisteredTerm } />
    </BrowserRouter>
  );
}

export default App;
