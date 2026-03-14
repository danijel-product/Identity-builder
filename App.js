import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../Identity Builder/Navigation/StackNavigator'
import VoteProvider from './context/VoteContext';

export default function App() {
  return (
    <VoteProvider>
    <NavigationContainer>
    <StackNavigator />
    </NavigationContainer>
    </VoteProvider>
  )
}
