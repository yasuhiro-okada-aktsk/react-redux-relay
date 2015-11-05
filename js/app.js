import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
import {createStore} from 'redux';
import {Provider} from './redux-compat';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
  <Provider store={store}>
    {() => (
      <Relay.RootContainer
        Component={App}
        route={new AppHomeRoute()}
      />
    )}
  </Provider>,
  document.getElementById('root')
);
