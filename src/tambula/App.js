import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers/index';
import TravupApp from './Screens';


class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <TravupApp />
      </Provider>
    )
  };
}

export default App