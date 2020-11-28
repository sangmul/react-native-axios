import React from 'react';
// import { createAppContainer, createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import PersonDataMain from './src/persondata/PersonDataMain';
import PersonDataRead from './src/persondata/PersonDataRead';
import PersonDataEdit from './src/persondata/PersonDataEdit.js';

const RootStack = createStackNavigator(
  {

    PersonDataEdit: {
      screen: PersonDataEdit,
      navigationOptions: {

      }
    },    
    PersonDataMain: {
      screen: PersonDataMain,
      navigationOptions: {

      }
    },

    PersonDataRead: {
      screen: PersonDataRead,
      navigationOptions: {

      }
    },
    
  },
  {
    initialRouteName: 'PersonDataMain', // ini root
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}