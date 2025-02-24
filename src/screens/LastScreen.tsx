import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomView from '../components/CustomView';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get("window");

const LastScreen = () => {
  const navigation = useNavigation();

  const handleOnPressContinue = () => {
    navigation.navigate('CameraScreen')
  }

  return (
    <CustomView>
      <Text style={styles.title}>Your Locket is set up</Text>

      <Text style={styles.text}>{'Tap the Plus button\nin the top left corner'}</Text>

      <View>
      </View>

      <TouchableOpacity
        style={[styles.continueButton, styles.continueButtonActive]}
        onPress={handleOnPressContinue}
      >
        <Text style={[styles.continueText, styles.activeBtnText]}>
          Finish
        </Text>
      </TouchableOpacity>
    </CustomView>
  )
}

export default LastScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20
  },

  continueButton: {
    backgroundColor: '#333333',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 70,
    width: width * 0.88,
    alignSelf: 'center'
  },
  continueButtonActive: {
    backgroundColor: Colors.btnColor,
  },
  continueText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
  activeBtnText: {
    color: Colors.btnText
  },
})