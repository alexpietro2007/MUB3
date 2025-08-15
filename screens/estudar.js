import React from 'react';
import { View, Text, Image, Pressable, Platform, PermissionsAndroid, Alert } from 'react-native';
import styles from '../styles/estudar.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import ReactNativeBlobUtil from 'react-native-blob-util';

const PDF_URL = 'https://mub3.org.br/mub3/arquivos_2025/Caderno%20Media%C3%A7%C3%A3o%20-%20Site.pdf';

export default function estudar({ navigation }) {
  
  const handleDownload = async () => {
    // Solicita permissão no Android
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permissão para salvar arquivo',
          message: 'Precisamos acessar seu armazenamento para salvar o PDF',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        return Alert.alert('Permissão negada', 'Não foi possível salvar o PDF sem permissão.');
      }
    }

    const { config, fs } = ReactNativeBlobUtil;
    const dirs = fs.dirs;
    const path = Platform.select({
      android: `${dirs.DownloadDir}/caderno_mediacao.pdf`,
      ios: `${dirs.DocumentDir}/caderno_mediacao.pdf`,
    });

    config({
      fileCache: true,
      notification: true,
      appendExt: 'pdf',
      path,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mime: 'application/pdf',
        description: 'Baixando PDF de mediação',
        title: 'Caderno Mediação',
        path,
      },
    })
      .fetch('GET', PDF_URL)
      .then(res => {
        Alert.alert('Download concluído', `Arquivo salvo em: ${res.path()}`);
      })
      .catch(err => {
        Alert.alert('Erro ao baixar', err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Ionicons name="cog" style={styles.cog} size={300}></Ionicons>
      
      <View style={styles.background}>
        <Text style={styles.text}>Pdf para estudo</Text>
      </View>
      
      <Ionicons name="arrow-down" style={styles.arrow} size={70}></Ionicons>
      
      <Pressable style={[styles.downloadButton, styles.background]} onPress={handleDownload}>
        <Text style={[styles.downloadButtonText, styles.text]}>Baixar PDF</Text>
      </Pressable>
      
      <Pressable style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonBackText}>Voltar</Text>
      </Pressable>
    </View>
  );
}
