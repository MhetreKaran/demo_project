import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/Slice';

const LocationScreen = () => {
  const params = useRoute().params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logout = () => {
    dispatch(logoutUser(false));
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView scrollEnabled={false}>
        <TouchableOpacity onPress={() => logout()} style={styles.button}>
          <Text style={styles.logout}>Log Out</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Location Details</Text>

        {typeof params?.description === 'string' ? (
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title}>{params?.title}</Text>
            <Text style={styles.description}>{params?.description}</Text>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.noData}>Location Details is not Available!</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 8,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  description: { color: 'black', fontSize: 18, fontWeight: '500',paddingHorizontal:16 },
  button: {
    margin: 10,
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'red',
    alignSelf: 'flex-end',
  },
  logout: { color: 'white', fontWeight: '700' },
  noData: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
});
