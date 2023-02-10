import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Video } from 'expo-av'

interface VideoScreenType {
  route: any
}

const VideoScreen: React.FC<VideoScreenType> = ({ route }) => {
  const { title } = route.params
  return (
    <View style={styles.container}>
      <Text>{title} Trailer</Text>
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

export default VideoScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    width: '100%',
    height: '100%'
  }
})
