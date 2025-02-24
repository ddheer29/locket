import { FlatList, KeyboardAvoidingView, Modal, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../components/CustomView'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import BackArrowSVG from '../assets/BackArrow'

const countryCodes = [
  { code: 'GB', flag: '🇬🇧', dialCode: '44' },
  { code: 'US', flag: '🇺🇸', dialCode: '1' },
  { code: 'IN', flag: '🇮🇳', dialCode: '91' },
  { code: 'AU', flag: '🇦🇺', dialCode: '61' },
  { code: 'DE', flag: '🇩🇪', dialCode: '49' },
];


const PhoneNumberScreen = () => {
  const navigation = useNavigation()
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleOnPressContinue = () => {
    navigation.navigate('VerifyOtpScreen', { phoneNumber })
  }

  const CountryPickerModal = () => (
    <Modal
      visible={showCountryModal}
      animationType="slide"
      transparent={true}
    >
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <TouchableOpacity
              onPress={() => setShowCountryModal(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={countryCodes}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryItem}
                onPress={() => {
                  setSelectedCountry(item);
                  setShowCountryModal(false);
                }}
              >
                <Text style={styles.countryFlag}>{item.flag}</Text>
                <Text style={styles.countryCode}>+{item.dialCode}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );

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
          <Text style={styles.title}>What's your number?</Text>

          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.countrySelector}
              onPress={() => setShowCountryModal(true)}
            >
              <Text style={styles.countryFlag}>{selectedCountry.flag}</Text>
              <Text style={styles.callingCode}>+{selectedCountry.dialCode}</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder="Enter phone number"
              placeholderTextColor="#666666"
              selectionColor={Colors.btnColor}
              maxLength={10}
            />
          </View>

          <Text style={styles.terms}>
            {'By tapping Continue, you are agreeing to \nour'} <Text style={{ color: Colors.light_gray }}>Terms of Service </Text> {'and'} <Text style={{ color: Colors.light_gray }}>Privacy Policy</Text>
          </Text>

          <TouchableOpacity
            style={[styles.continueButton, phoneNumber.length > 0 && styles.continueButtonActive]}
            disabled={phoneNumber.length === 0}
            onPress={handleOnPressContinue}
          >
            <Text style={[styles.continueText, phoneNumber.length > 0 && styles.activeBtnText]}>Continue →</Text>
          </TouchableOpacity>
        </View>
        <CountryPickerModal />
      </KeyboardAvoidingView>
    </CustomView>
  )
}

export default PhoneNumberScreen


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
    marginTop: 80,
  },
  continueButton: {
    backgroundColor: '#333333',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
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