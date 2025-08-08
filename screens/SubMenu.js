import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/SubMenu.js';

export default function SubMenu({ navigation }) {
  return (
    <View style={styles.container}>

      <Pressable style={[styles.button, styles.buttonRightRounded]} onPress={() => {navigation.navigate('estudar')}}>
        <Text style={styles.buttonText}>Estudar</Text>
        <Image source={require("../assets/estudarIcon.png")} style={styles.icon} />
      </Pressable>

      <Pressable style={[styles.button, styles.buttonLeftRounded]} onPress={() => {}}>
        <Image source={require("../assets/criadoresIcon.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Criadores</Text>
      </Pressable>

      <Pressable style={[styles.button, styles.buttonRightRounded]} onPress={() => {}}>
        <Text style={styles.buttonText}>Jogar</Text>
        <Image source={require("../assets/jogarIcon.png")} style={styles.icon} />
      </Pressable>

      <Pressable style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonBackText}>Voltar</Text>
      </Pressable>
        <Image source={require("../assets/engrenagem.png")} style={styles.cog}></Image>
    </View>
  );
}
