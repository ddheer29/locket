import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../components/CustomView'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Colors } from '../constants/Colors'

interface VerifyOtpScreenParams {
  phoneNumber: string;
}

const VerifyOtpScreen = () => {
  const route = useRoute();
  const navigation = useNavigation()
  const [otp, setOtp] = useState('');

  const data = route?.params as VerifyOtpScreenParams;

  const handleOnPressContinue = () => {
    navigation.navigate('FullNameScreen')
  }
  return (
    <CustomView>
      <TouchableOpacity
        style={{ position: 'absolute', left: 20, top: 80, backgroundColor: 'rgb(50, 45, 39)', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}
        onPress={() => navigation.goBack()}>
        <Text>⬅️</Text>
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Verify your number</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={otp}
              onChangeText={setOtp}
              keyboardType="phone-pad"
              placeholder="6-Digit code"
              placeholderTextColor="#666666"
              selectionColor={Colors.btnColor}
            />
          </View>

          <Text style={styles.terms}>
            {`Sent to ${data?.phoneNumber} \n Try again in 30 sec`}
          </Text>

          <TouchableOpacity
            style={[styles.continueButton, otp.length > 0 && styles.continueButtonActive]}
            disabled={otp.length === 0}
            onPress={handleOnPressContinue}
          >
            <Text style={[styles.continueText, otp.length > 0 && styles.activeBtnText]}>Continue →</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </CustomView>
  )
}

export default VerifyOtpScreen

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
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: '#444444',
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 5,
  },
  callingCode: {
    color: 'white',
    fontSize: 16,
  },
  phoneNumberText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  terms: {
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 12,
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: '#333333',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50
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
  },
  activeBtnText: {
    color: Colors.btnText
  }
});