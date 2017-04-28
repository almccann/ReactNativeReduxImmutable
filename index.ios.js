import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/app/AppViewContainer';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

class ReactNativeReduxImmutable extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeReduxImmutable', () => ReactNativeReduxImmutable);
