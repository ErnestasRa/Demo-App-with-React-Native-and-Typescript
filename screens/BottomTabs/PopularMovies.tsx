/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import {
  type NavigationProp,
  type ParamListBase
} from '@react-navigation/native'
import getData from '../../functions/get'
import MovieComponent from '../../components/MovieComponent'

interface PopularMoviesType {
  navigation: NavigationProp<ParamListBase>
}

const PopularMovies: React.FC<PopularMoviesType> = ({ navigation }) => {
  const [popularMovies, setPopularMovies] = React.useState<MovieType[]>([])
  const PopularMoviesAPI =
    'https://api.themoviedb.org/3/movie/popular?api_key=fd1e775d0f68dbb7f4fde49abb56bdc0&language=en-US&page=1'

  React.useEffect(() => {
    getData(PopularMoviesAPI, setPopularMovies)
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        {popularMovies.map((movie, i) => (
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

export default PopularMovies

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})
