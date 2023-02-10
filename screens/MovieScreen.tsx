import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PopularMovies from './BottomTabs/PopularMovies'
import LatestScreen from './BottomTabs/LatestScreen'
import ComingSoon from './BottomTabs/ComingSoon'

const Tab = createBottomTabNavigator()

const MovieScreen: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Popular"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Popular" component={PopularMovies} />
      <Tab.Screen name="Latest" component={LatestScreen} />
      <Tab.Screen name="Coming soon" component={ComingSoon} />
    </Tab.Navigator>
  )
}

export default MovieScreen
