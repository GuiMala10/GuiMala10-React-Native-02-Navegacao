import {StyleSheet} from 'react-native';

const estiloColecao = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    
    },
    
    borda: {
        backgroundColor: "#2ec4b6",
        width: '80%',
        height: '25%',
        borderRadius: 10, 
    
    },

    texto: {
        fontSize: 20,
        color: '#011627',
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
        backgroundColor: '#011627',
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    textoBotao: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: 'bold',
    }

});

export default estiloColecao;
