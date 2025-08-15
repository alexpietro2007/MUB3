import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,

    },

    logo: {
        width: 300,
        height: 50,
        marginTop: 90,
        marginLeft: 55,
        zIndex: 1,
    },

    cog:{
        color: '#54C5D8',
        position: 'absolute',
        right: 230,
        bottom: 780,
        zIndex: 0,
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

    background: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#54C5D8', // azul claro da borda
    height: 70,
    alignItems: 'center',
    marginVertical: 100,
    justifyContent: 'center',
    textAlign: 'center',
    width: '80%',
    paddingHorizontal: 20,
    borderRadius: 50, // borda arredondada
    alignSelf: 'center', // centraliza horizontalmente
  },

   text: {
    fontSize: 20,
    color: '#000',
  },

  arrow:{
    color: '#54C5D8',
    position: 'absolute',
    left: 165,
    bottom: 500,
    zIndex: 0,
  },

});
