import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {
  type NavigationProp,
  type ParamListBase
} from '@react-navigation/native'

interface HomeScreenType {
  navigation: NavigationProp<ParamListBase>
}

const HomeScreen: React.FC<HomeScreenType> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>ReactSeals</Text>
      <View>
        <Button
          title="Browse"
          onPress={() => {
            navigation.navigate('Movie')
          }}
        />
        <View style={styles.buttonGap} />
        <Button title="Log in" />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonGap: {
    marginTop: 20
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: 30,
    marginBottom: 10
  }
})
