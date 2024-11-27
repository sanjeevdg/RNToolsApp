import { StyleSheet,Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
 const screenWidth = dimensions.width;
    const screenHeight = dimensions.height;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'        
    },
    wrapper: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    controls: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    picker: {
        height: 80,
        width:'90%',
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
    },
    exchangeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#0984e3',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    exchangeButtonText: {
        color: 'white',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#0984e3',
        borderRadius: 8,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },

});

export { styles }
