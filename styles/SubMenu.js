import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111216',
    paddingTop: 40,
    overflow: 'hidden',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2.5,
    borderColor: '#54C5D8', // azul claro da borda
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 50,
    width: '80%',
  },

  buttonRightRounded: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },

  buttonLeftRounded: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },

  buttonText: {
    flex: 1,
    fontSize: 25,
    fontWeight: '500',
    color: '#000',
  },

  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  buttonBack: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#54C5D8',
    // borderRadius: 20,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 40,
    backgroundColor: '#000000',
    width: 200,
    height: 75,
    zIndex: 1,
  
    justifyContent: 'center',  // centraliza verticalmente o conteúdo
    alignItems: 'center',      // centraliza horizontalmente o conteúdo
  },
  

  buttonBackText: {
    color: '#54C5D8',
    fontSize: 35,
    fontWeight: '400',
  },

  cog:{
    left: 200,
    top: 150,
    zIndex: 0,
  }
});
