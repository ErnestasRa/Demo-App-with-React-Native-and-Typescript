import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import * as React from 'react'

interface MovieComponentType {
  title: string
  onPress?: VoidFunction
}

const RelatedMoviesComponent: React.FC<MovieComponentType> = ({
  title,
  onPress
}) => (
  <TouchableHighlight onPress={onPress} underlayColor="#DDDDDD">
    <View style={styles.container}>
      <View style={styles.movieImage} />
      <Text style={styles.movieTitle} onPress={onPress}>
        {title}
      </Text>
    </View>
  </TouchableHighlight>
)
export default RelatedMoviesComponent

const styles = StyleSheet.create({
  movieImage: {
    backgroundColor: 'darkgrey',
    height: 70,
    width: 70,
    margin: 10
  },
  movieTitle: {
    marginTop: 20,
    fontSize: 10,
    margin: 5
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
