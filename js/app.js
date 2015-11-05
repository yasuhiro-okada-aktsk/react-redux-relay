import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
import {createStore, combineReducers} from 'redux';
import {Provider} from './redux-compat';
import * as reducers from './reducers';

const redux = createStore(combineReducers(reducers));


React.render(
  <Provider store={redux}>
    {() => (
      <Relay.RootContainer
        Component={App}
        route={new AppHomeRoute()}
      />
    )}
  </Provider>,
  document.getElementById('root')
);
