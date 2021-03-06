import React from 'react'
import { Text, View, Stylesheet } from 'react-native'
import TransactionScreen from './screens/ProductTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen:TransactionScreen},
  Search: {screen:SearchScreen},
});

const AppContainer = createAppContainer(TabNavigator)