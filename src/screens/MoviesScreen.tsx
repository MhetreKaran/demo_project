import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesList} from '../redux/asyncAction';

const MoviesScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.todos?.movies);

  useEffect(() => {
    dispatch(getMoviesList());
  }, []);
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>Movies List</Text>
        {Array.isArray(movies) && movies.length > 0 && (
          <FlatList
            renderItem={({item, index}) => {
              return (
                <View key={index} style={{alignItems: 'center'}}>
                  <Text style={styles.movieTitle}>{item?.movie}</Text>
                  <Text
                    style={
                      styles.rating
                    }>{`IMDB Rating: ${item?.rating}`}</Text>
                  {typeof item?.image === 'string' &&
                    typeof item?.imdb_url === 'string' && (
                      <Image
                        source={{uri: `${item?.imdb_url}${item?.image}`}}
                        style={styles.image}
                      />
                    )}
                </View>
              );
            }}
            data={movies}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontWeight: '900',
    fontSize: 24,
    marginVertical: 10,
  },
  movieTitle: {color: 'black', fontSize: 18, fontWeight: '500'},
  rating: {color: 'black', fontSize: 14, fontWeight: '400'},
  image: {width: 100, height: 100, resizeMode: 'contain', borderWidth: 1},
});
