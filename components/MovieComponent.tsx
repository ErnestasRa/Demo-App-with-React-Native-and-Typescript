import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import * as React from 'react'

interface MovieComponentType {
  title: string
  onPress?: VoidFunction
}

const MovieComponent: React.FC<MovieComponentType> = ({ title, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="#DDDDDD">
    <View style={styles.container}>
      <View style={styles.movieImage} />
      <Text style={styles.movieTitle}>{title}</Text>
    </View>
  </TouchableHighlight>
)
export default MovieComponent

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  movieImage: {
    backgroundColor: 'darkgrey',
    height: 150,
    width: 150
  },
  movieTitle: {
    marginTop: 20
  }
})
