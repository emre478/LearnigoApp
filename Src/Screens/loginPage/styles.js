import {StyleSheet} from "react-native";

export default StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#f4f8fc',
        alignItems: 'center',
        paddingTop: 60,
        paddingHorizontal: 20,
      },
      hello: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#2c2f4a',
      },
      inputSection: {
        width: '100%',
        marginTop: 40,
      },
      loginTitle: {
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
      forgotPassword: {
        alignSelf: 'flex-end',
        color: '#007bff',
        marginBottom: 30,
      },
      signUpButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#0b5ed7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      orLogin: {
        marginVertical: 10,
        color: '#495057',
        alignSelf: 'center',
      },
      socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 30,
        alignSelf: 'center',
      },
      socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ced4da',
      },
      socialIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
      },
      bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      signUpText: {
        color: '#0b5ed7',
      },
});