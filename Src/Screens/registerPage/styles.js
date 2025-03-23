import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f4f8fc',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#2c2f4a',
      },
      inputSection: {
        width: '100%',
        marginTop: 20,
      },
      registerTitle: {
        fontSize: 24,
        alignSelf: 'flex-start',
        marginBottom: 10,
        color: '#2c2f4a',
      },
      input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
      },
      passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingRight: 10,
      },
      passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
      },
      toggleButton: {
        padding: 5,
      },
      registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#0b5ed7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      loginText: {
        color: '#0b5ed7',
      },
});