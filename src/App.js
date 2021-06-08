import { BrowserRouter, Route } from 'react-router-dom';
import RegisterTerm from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ RegisterTerm } />
    </BrowserRouter>
  );
}

export default App;
