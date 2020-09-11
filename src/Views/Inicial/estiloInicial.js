import {StyleSheet} from 'react-native';

const estiloInicial = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
    
    },
    
    borda: {
        backgroundColor: "#2ec4b6",
        width: '80%', 
        height: '40%',
        borderRadius: 10, 
    
    },

    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10,
    
    },

    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#011627',
        justifyContent: 'center',
        alignItems: 'center',
 
    },

    textoBotao: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold',
    }

});

export default estiloInicial;
