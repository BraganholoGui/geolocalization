import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Router from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
