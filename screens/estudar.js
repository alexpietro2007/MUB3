import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/estudar.js';

export default function estudar({ navigation }) {
  return (
    <View style={styles.container}>
      <Image></Image>
      <View></View>
      <Pressable style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonBackText}>Voltar</Text>
      </Pressable>
    </View>
  );
}
