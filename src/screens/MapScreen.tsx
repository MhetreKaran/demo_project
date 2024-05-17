import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import CustomBottomSheet from '../components/CustomBottomSheet';
import { marker } from '../redux/Interface';
import { dummyMarkers } from '../components/utils';

const MapScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [marker, setMarker] = useState({});
  const handleMarker = (marker:marker) => {
    setMarker(marker);
    setIsVisible(!isVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 18.521553,
          longitude: 73.855222,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {dummyMarkers.map((marker:marker, index) => (
          <Marker
            key={index}
            coordinate={{latitude: marker.lat, longitude: marker.long}}
            onPress={() => handleMarker(marker)}
          />
        ))}
      </MapView>
      {isVisible && (
        <CustomBottomSheet
          marker={marker}
          isVisible={isVisible}
          toggle={setIsVisible}
        />
      )}
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
