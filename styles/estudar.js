import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,

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

});
