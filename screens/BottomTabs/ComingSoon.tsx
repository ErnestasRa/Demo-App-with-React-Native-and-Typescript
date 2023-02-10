import * as React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import {
  type NavigationProp,
  type ParamListBase
} from '@react-navigation/native'
import getData from '../../functions/get'
import MovieComponent from '../../components/MovieComponent'

interface ComingSoonType {
  navigation: NavigationProp<ParamListBase>
}

const ComingSoon: React.FC<ComingSoonType> = ({ navigation }) => {
  const [comingSoon, setComingSoon] = React.useState<MovieType[]>([])
  const ApiKey =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=fd1e775d0f68dbb7f4fde49abb56bdc0&language=en-US&page=1'

  React.useEffect(() => {
    void getData(ApiKey, setComingSoon)
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {comingSoon.map((movie, i) => (
          <MovieComponent
            title={movie.title}
            key={i}
            onPress={() => {
              navigation.navigate('Details', {
                title: movie.title,
                description: movie.overview,
                genre: movie.genre_ids[3]
              })
            }}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default ComingSoon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})
