import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import MovieScreen from './screens/MovieScreen'
import DetailsPage from './screens/DetailsScreen'
import VideoScreen from './screens/VideoPlayerScreen'

const Stack = createNativeStackNavigator()

const App: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={{ title: 'Browse' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsPage}
        options={{ title: 'Movie Details' }}
      />
      <Stack.Screen
        name="Video Player"
        component={VideoScreen}
        options={{ title: 'Video Player' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
