import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [name, setName ] = useState();
  const [email, setEmail ] = useState();
  const [password, setPassword ] = useState();
  const [loading, setLoading ] = useState(false)

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/imagePageLogin.png")}
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

      <Text style={styles.p}>Ou entre com:</Text>
      <Image
        source={require("../../images/icones.png")}
        style={styles.icones}
      />

      <TouchableOpacity style={styles.crie}>
        <Text>Não tem uma conta?<Text style={styles.buttonCrie}> Crie aqui.</Text></Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  crie: {
    marginTop: '1%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonCrie: {
    color: '#7C73E6',
  },

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
    marginBottom: '3%',
    color: '#7C73E6',
  },

  p: {
    fontStyle: 'normal',
    fontSize: 14,
    marginTop: '2%',
    color: '#7C73E6',
  },

  icones: {
    marginTop: '1%'
  },

  input: {
    width: '70%',
    height: 35,
    fontSize: 18,
    marginTop: '7%',
    borderBottomColor: '#4F4F4F',
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
