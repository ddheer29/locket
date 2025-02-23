import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../components/CustomView'
import { Colors } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const AddWidgetScreen = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnPressContinue = () => {
    navigation.navigate('LastScreen')
  }

  return (
    <CustomView>
      <Text style={styles.title}>{'Finally, add the widget\nto your home screen'}</Text>

      <View>

      </View>

      <Text style={styles.secondaryText}>
        {
          activeIndex === 0
            ? 'Hold down on any app\nto edit your Home Screen'
            : activeIndex === 1
              ? 'Tap the Plus button\nin the top left corner'
              : 'Search for Locket\nand add the widget'
        }
      </Text>

      <TouchableOpacity
        style={[styles.continueButton, activeIndex === 2 && styles.continueButtonActive]}
        disabled={activeIndex < 3}
        onPress={handleOnPressContinue}
      >
        <Text style={[styles.continueText, activeIndex === 2 && styles.activeBtnText]}>Continue →</Text>
      </TouchableOpacity>
    </CustomView>
  )
}

export default AddWidgetScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20
  },
  secondaryText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    marginTop: 10
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
  activeBtnText: {
    color: Colors.btnText
  }
})