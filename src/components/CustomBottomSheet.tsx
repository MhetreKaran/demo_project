import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {marker} from '../redux/Interface';
import {useNavigation} from '@react-navigation/native';

export interface bottomSheetProp {
  marker: marker;
  isVisible: boolean;
  toggle: Function;
}
const CustomBottomSheet = (props: bottomSheetProp) => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <Modal
        isVisible={props.isVisible}
        style={{margin: 0}}
        onSwipeComplete={() => props.toggle(false)}
        swipeDirection="down">
        <TouchableOpacity
          onPress={() => navigation.navigate('LocationScreen', props.marker)}
          style={styles.container}>
          <View style={styles.textContainer} />
          <Text style={styles.title}>{props.marker?.title}</Text>
          <Text numberOfLines={5} style={styles.description}>{props.marker?.description}</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 14,
  },
  textContainer: {
    borderWidth: 1,
    width: 60,
    marginTop: -8,
    borderColor: 'grey',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 8,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  description: {color: 'black', fontSize: 18, fontWeight: '500'},
});
