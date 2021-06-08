import { BrowserRouter } from 'react-router-dom';
import {Routes} from './routes/routesIndex' ;
import { Provider } from 'react-redux'

import { store } from './redux/store'

// import logo from './logo.svg';
import './app.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
