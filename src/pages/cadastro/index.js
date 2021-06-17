import { StatusBar } from "expo-status-bar";
import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  Platform,
} from "react-native";
import {
  Container,
  Login,
  ButtonCrie,
  Title,
  PText,
  Icones,
  InputText,
  Button,
  ButtonText,
  AddImage,
  AddImageText,
} from "./style";

import * as ImagePicker from "expo-image-picker";
import { Context } from "../../Context/AuthContext.js";

export default function App({ navigation }) {
  const { handleRegister } = useContext(Context);
  const [image, setImage] = useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  function signUp() {
    if (!name.length || !email.length || !password.length)
      return alert("Preencha todos os campos PTexta continuar!");
    setDisabled(true);
    const formData = new FormData();

    if (image) {
      let filename = image.split("/").pop();
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      formData.append("file", { uri: image, name: filename, type });
    }
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    handleRegister(formData).then((response) => {
      if (response.error) {
        alert(response.error);
        return setDisabled(false);
      }
      return navigation.navigate("Home");
    });
  }

  return (
    <Container>
      <Title>Cadastro</Title>
      <InputText
        placeholder="Nome"
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <InputText
        placeholder="Email"
        onChangeText={(value) => {
          setEmail(value);
        }}
      />

      <InputText
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />

      <AddImage onPress={pickImage}>
        <AddImageText>Foto de Perfil</AddImageText>
      </AddImage>

      <Button
        onPress={signUp}
        disabled={disabled}
      >
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <PText>Ou cadastre-se com :</PText>
      <Icones
        source={require("../../images/icones.png")}
      />

      <Login>
        <Text>
          Já tem uma conta?
          <ButtonCrie onPress={() => navigation.navigate("Login")}>
            Fazer Login.
          </ButtonCrie>
        </Text>
      </Login>

      <StatusBar style="auto" />
    </Container>
  );
}
