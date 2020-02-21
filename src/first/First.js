import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const First = () => {
    const [username, setUsername] = useState('')
    const [welcomeMessage, setWelcomeMessage] = useState('')

    const handleLogin = () => {
      setWelcomeMessage(`Seja bem vindo ${username}`)
}

  return (
       <View>
        <Text>Primeiro app React Native!</Text>

        <TextInput style={styles.input}
                   value={username}
                   onChangeText={(text) => setUsername(text)}
                    />

        <Button title='Entrar' onPress={handleLogin} />

        <Text>{welcomeMessage}</Text>
      </View> 
      )
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F00',
  }
});

export default First;
