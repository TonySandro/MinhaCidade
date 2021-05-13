import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./images/imagePageLogin.png")}
        style={styles.logo}
      />
      <Text style={styles.h1}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.login}>Crie aqui.</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '70%',
    height: 180,
  },

  h1: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
    color: '#7C73E6',
  },

  input: {
    width: '70%',
    height: 35,
    fontSize: 18,
    marginTop: '7%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,

  },

  button: {
    width: '70%',
    height: 60,
    marginTop: '10%',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7C73E6',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },

  login: {
    color: '#7C73E6',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '7%',
  }
});
