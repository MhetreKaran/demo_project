import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {checkUserCredentials} from './utils';
import {updateIsLogIn} from '../redux/Slice';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);

  const handleEmail = (e: any) => {
    let emailVar = e.nativeEvent.text;
    setUsername(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setUsername(emailVar);
      setEmailVerify(true);
    }
  };
  const handlePassword = (e: any) => {
    let passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  };

  const loginForm = () => {
    if (emailVerify && passwordVerify) {
      const result = checkUserCredentials(username, password);

      if (result) {
        dispatch(updateIsLogIn(result));
        navigation.navigate('Tab');
      } else {
        Alert.alert('Invalid User');
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholderTextColor={'black'}
        placeholder="Enter your Email"
        onChange={e => handleEmail(e)}
        style={styles.textInput}
      />
      {username.length < 1 ? null : emailVerify ? null : (
        <Text style={{color: 'red'}}>Enter proper email address</Text>
      )}
      <TextInput
        placeholderTextColor={'black'}
        placeholder="Enter your password"
        onChange={e => handlePassword(e)}
        style={styles.textInput}
      />
      {password.length < 1 ? null : passwordVerify ? null : (
        <Text style={{color: 'red'}}>
          Uppercase, Lowercase, Number and 6 or more characters
        </Text>
      )}
      <TouchableOpacity onPress={loginForm} style={styles.button}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  Heading: {
    marginTop: 40,
    padding: 40,
  },
  HeadingText: {
    fontSize: 25,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 10,
    color: 'black',
    borderRadius: 12,
  },
  strengthText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#007700',
  },
  suggestionsText: {
    color: 'red',
    width: '100%',
  },
  strengthMeter: {
    width: '100%',
    height: 20,
    backgroundColor: '#ccc',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
