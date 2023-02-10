import * as React from 'react'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import {
  type NavigationProp,
  type ParamListBase
} from '@react-navigation/native'

interface DetailsPageComponentType {
  navigation: NavigationProp<ParamListBase>
  title: string
  description: string
}

const DetailsPageComponent: React.FC<DetailsPageComponentType> = ({
  navigation,
  title,
  description
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.movieImage} />
        <Text style={styles.movieTitle}>{title}</Text>
        <Text style={styles.movieDescription}>{description}</Text>
        <View style={styles.buttonSeparator} />
        <Button
          title="Play Movie"
          onPress={() => {
            navigation.navigate('Video Player', {
              title
            })
          }}
        />
        <View style={styles.buttonSeparator} />
        <Button title="Add to library" />
      </View>
    </ScrollView>
  )
}

export default DetailsPageComponent

const styles = StyleSheet.create({
  buttonSeparator: {
    marginTop: 30
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 30
  },
  movieDescription: {
    marginTop: 30
  },
  movieImage: {
    backgroundColor: 'darkgrey',
    height: 200,
    width: 200
  },
  movieTitle: {
    marginTop: 20
  }
})
