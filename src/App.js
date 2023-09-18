import { BrowserRouter as Router } from "react-router-dom";
import routes from "./router/routes";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistedStore} from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <Router>
            {routes}
          </Router>
        </PersistGate>
    </Provider>
  );
}

export default App;
