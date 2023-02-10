/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react'
import {
  type NavigationProp,
  type ParamListBase
} from '@react-navigation/native'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import getData from '../functions/get'
import RelatedMoviesComponent from '../components/RelatedMoviesComponent'
import DetailsPageComponent from '../components/DetailsPageComponent'

interface DetailsPageType {
  route: any
  navigation: NavigationProp<ParamListBase>
}

const DetailsPage: React.FC<DetailsPageType> = ({ route, navigation }) => {
  const [relatedMovies, setRelatedMovies] = React.useState<MovieType[]>([])
  const { title, description, genre } = route.params
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=fd1e775d0f68dbb7f4fde49abb56bdc0&with_genres=${genre}`

  React.useEffect(() => {
    void getData(API_URL, setRelatedMovies)
  }, [])

  return (
    <View>
      <ScrollView>
        <DetailsPageComponent
          description={description}
          navigation={navigation}
          title={title}
        />
        <Text>Related Movies</Text>
        <ScrollView horizontal={true}>
          <View style={styles.relatedSeparator}>
            <View style={styles.relatedMoviesContainer}>
              {relatedMovies.map((movie, i) => {
                return (
                  <RelatedMoviesComponent
                    key={i}
                    title={movie.title}
                    onPress={() => {
                      navigation.navigate('Details', {
                        title: movie.title,
                        description: movie.overview,
                        genre: movie.genre_ids
                      })
                    }}
                  />
                )
              })}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
  buttonSeparator: {
    marginTop: 30
  },
  relatedMoviesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  relatedSeparator: {
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
