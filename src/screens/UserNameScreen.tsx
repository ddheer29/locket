import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import CustomView from '../components/CustomView';
import BackArrowSVG from '../assets/BackArrow';

const UserNameScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');

  const handleOnPressContinue = () => {
    navigation.navigate('AddWidgetScreen')
  }

  return (
    <CustomView>
      <TouchableOpacity
        style={{ position: 'absolute', left: 20, top: 80, backgroundColor: 'rgb(50, 45, 39)', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}
        onPress={() => navigation.goBack()}>
        <BackArrowSVG />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Pick a username</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              keyboardType='default'
              placeholder="username"
              placeholderTextColor="#666666"
              selectionColor={Colors.btnColor}
            />
          </View>

          <Text style={styles.terms}>
            This helps your friends find you on Locket!
          </Text>


          <TouchableOpacity
            style={[styles.continueButton, username.length > 3 && styles.continueButtonActive]}
            disabled={username.length <= 3}
            onPress={handleOnPressContinue}
          >
            <Text style={[styles.continueText, username.length > 3 && styles.activeBtnText]}>Continue →</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </CustomView>
  )
}

export default UserNameScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 160,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#333333',
    borderRadius: 20,
    height: 56,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  terms: {
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 12,

  },
  callingCode: {
    color: 'white',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#333333',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 70
  },
  continueButtonActive: {
    backgroundColor: Colors.btnColor,
  },
  continueText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  keyboard: {
    marginTop: 'auto',
    marginBottom: 30,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  keyboardKey: {
    width: '30%',
    height: 65,
    backgroundColor: '#333333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
  keyLetters: {
    color: '#666666',
    fontSize: 10,
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    flex: 1,
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
  },
  countryItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    alignItems: 'center',
  },
  countryCode: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    padding: 0,
    textAlign: 'center',
  },
  activeBtnText: {
    color: Colors.btnText
  }
});