import React from 'react';
import Main from './components/MainComponent';
// Week 2: Exercise 4 - Using Redux in React Native - Import 
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// Week 2: Exercise 4 - Using Redux in React Native - Create redux store
const store = ConfigureStore();

// Week 2: Exercise 4 - Using Redux in React Native - Add the ability to for Main and all child components to connect to redux store
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}